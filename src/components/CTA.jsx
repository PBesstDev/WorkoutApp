import React from "react";
import Button from "./Button";

/**
 * Final call-to-action section before the footer.
 */
function CTA() {
  return (
    <section className="cta-section" id="start">
      <h2>START YOUR JOURNEY</h2>
      <p>
        Join thousands of athletes training smarter and setting a higher
        standard every day.
      </p>
      <div className="cta-buttons">
        <Button variant="primary" size="large" href="/login">
          Log In / Sign Up
        </Button>
        <Button variant="ghost" size="large" href="#programs">
          Browse Programs
        </Button>
      </div>
    </section>
  );
}

export default CTA;
