import { createClient } from "redis";

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60; 
const MAX_REQUESTS = 3; // Max 3 requests per min per IP

// Redis client (lazy connection)
let redis = null;

async function getRedis() {
  if (!redis) {
    redis = createClient({
      url: process.env.REDIS_URL
    });
    redis.on("error", (err) => console.error("Redis error:", err));
    await redis.connect();
  }
  return redis;
}

/**
 * Check if IP is rate limited using Redis
 */
async function checkRateLimit(ip) {
  const key = `ratelimit:contact:${ip}`;
  
  try {
    const client = await getRedis();
    const count = await client.incr(key);
    
    // Set expiry on first request
    if (count === 1) {
      await client.expire(key, RATE_LIMIT_WINDOW);
    }
    
    return {
      limited: count > MAX_REQUESTS,
      remaining: Math.max(0, MAX_REQUESTS - count),
      reset: RATE_LIMIT_WINDOW
    };
  } catch (err) {
    console.error("Rate limit error:", err);
    // If Redis fails, allow request (fail open)
    return { limited: false, remaining: MAX_REQUESTS, reset: RATE_LIMIT_WINDOW };
  }
}

/**
 * Get client IP from request headers
 */
function getClientIP(req) {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

/**
 * Sanitize user input
 */
function sanitize(str) {
  return String(str || "")
    .replace(/[<>]/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "") // Remove control characters
    .trim()
    .slice(0, 1000);
}

export default async function handler(req, res) {
  // Security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // CORS headers
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get client IP and check rate limit
  const clientIP = getClientIP(req);
  const rateLimit = await checkRateLimit(clientIP);

  // Set rate limit headers
  res.setHeader("X-RateLimit-Limit", MAX_REQUESTS);
  res.setHeader("X-RateLimit-Remaining", rateLimit.remaining);
  res.setHeader("X-RateLimit-Reset", rateLimit.reset);

  if (rateLimit.limited) {
    return res.status(429).json({
      error: "Too many requests. Please try again in a minute.",
      retryAfter: rateLimit.reset
    });
  }

  // Check webhook URL is configured
  if (!process.env.DISCORD_WEBHOOK_URL) {
    console.error("DISCORD_WEBHOOK_URL not configured");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const { name, email, subject, message, company, _gotcha } = req.body;

  // Honeypot - bots fill hidden fields
  if (company || _gotcha) {
    return res.status(200).json({ ok: true });
  }

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  // Length validation
  if (name.length > 100 || email.length > 254 || message.length > 2000) {
    return res.status(400).json({ error: "Input too long" });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Sanitize inputs
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeSubject = sanitize(subject || "No subject");
  const safeMessage = sanitize(message);

  try {
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: "📩 New Portfolio Message",
          color: 0x5865F2,
          fields: [
            { name: "👤 Name", value: safeName, inline: true },
            { name: "📧 Email", value: safeEmail, inline: true },
            { name: "📋 Subject", value: safeSubject },
            { name: "💬 Message", value: safeMessage }
          ],
          footer: { text: `From: ${clientIP.substring(0, 8)}***` },
          timestamp: new Date().toISOString()
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    res.status(200).json({ ok: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Discord webhook error:", err.message);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
}
