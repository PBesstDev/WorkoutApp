import React from "react";
import Button from "./Button";

/**
 * Reusable card that displays one training program.
 * Props match the shape in data/programs.js
 */
function ProgramCard({ title, description, duration, type, level, icon }) {
  return (
    <div className="program-card">
      <div className="program-icon">{icon}</div>
      <h3 className="program-title">{title}</h3>
      <p className="program-desc">{description}</p>
      <div className="program-meta">
        <span className="program-tag">{type}</span>
        <span className="program-tag">{duration}</span>
        <span className="program-tag">{level}</span>
      </div>
      <Button variant="outline" href="#start" className="program-cta">
        Start Program
      </Button>
    </div>
  );
}

export default ProgramCard;
