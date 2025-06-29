import React from 'react';

/**
 * Reusable Icon component that handles both React Icons and fallback URLs
 * @param {Object} props - Component props
 * @param {React.ComponentType|string} props.icon - React icon component or URL string
 * @param {string} props.name - Alt text for accessibility
 * @param {string} props.size - Icon size (default: "24px")
 * @param {string} props.color - Icon color
 * @param {string} props.className - Additional CSS classes
 */
const Icon = ({ 
  icon, 
  name, 
  size = "24px", 
  color, 
  className = "",
  ...props 
}) => {
  // If icon is a React component (function/class)
  if (typeof icon === 'function') {
    const IconComponent = icon;
    return (
      <IconComponent
        size={size}
        color={color}
        className={className}
        title={name}
        aria-label={name}
        {...props}
      />
    );
  }

  // If icon is a URL string (fallback)
  if (typeof icon === 'string') {
    return (
      <img
        src={icon}
        alt={name}
        title={name}
        width={size}
        height={size}
        className={`inline-block ${className}`}
        style={{ color }}
        {...props}
      />
    );
  }

  // Fallback if no icon provided
  return (
    <div
      className={`inline-block bg-gray-300 ${className}`}
      style={{ width: size, height: size }}
      title={name}
      aria-label={name}
    />
  );
};

export default Icon;
