import React from "react";

/**
 * Reusable card for a single feature.
 * Props:
 *   icon        — emoji or icon string
 *   title       — feature name
 *   description — short explanation
 */
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
