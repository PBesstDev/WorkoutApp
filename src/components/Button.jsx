import React from "react";

/**
 * Reusable button component.
 * Props:
 *   children  — button text or elements
 *   variant   — "primary" | "ghost" | "outline" (default "primary")
 *   size      — "normal" | "large" (default "normal")
 *   href      — if provided, renders as <a> instead of <button>
 *   onClick   — click handler
 *   className — extra CSS classes
 */
function Button({
  children,
  variant = "primary",
  size = "normal",
  href,
  onClick,
  className = "",
  type = "button",
}) {
  const baseClass = `btn btn-${variant}${size === "large" ? " btn-large" : ""} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={baseClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
