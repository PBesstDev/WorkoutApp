import React from "react";

/**
 * Reusable testimonial / transformation card.
 */
function TestimonialCard({ name, result, quote, avatar }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <span className="testimonial-avatar">{avatar}</span>
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-result">{result}</div>
        </div>
      </div>
      <p className="testimonial-quote">"{quote}"</p>
    </div>
  );
}

export default TestimonialCard;
