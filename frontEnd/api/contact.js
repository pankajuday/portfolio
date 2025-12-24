export default async function handler(req, res) {
  // CORS headers for your domain
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message, company } = req.body;

  // Honeypot - bots fill hidden fields
  if (company) {
    return res.status(200).json({ ok: true });
  }

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Invalid input" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Sanitize inputs (basic XSS prevention)
  const sanitize = (str) => str.replace(/[<>]/g, "").trim().slice(0, 1000);

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeSubject = sanitize(subject || "No subject");
  const safeMessage = sanitize(message);

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: "📩 New Portfolio Message",
          color: 0x5865F2,
          fields: [
            { name: "Name", value: safeName },
            { name: "Email", value: safeEmail },
            { name: "Subject", value: safeSubject },
            { name: "Message", value: safeMessage }
          ],
          timestamp: new Date().toISOString()
        }]
      })
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Discord webhook error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
}
