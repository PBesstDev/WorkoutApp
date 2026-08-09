import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "./testimonials";

/**
 * Social proof section — real results and quotes.
 */
function Transformations() {
  return (
    <section className="transformations" id="results">
      <h2 className="section-title">REAL RESULTS</h2>
      <p className="section-sub">
        Thousands of athletes are setting their standard every day.
      </p>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
    </section>
  );
}

export default Transformations;
