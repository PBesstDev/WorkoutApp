import React from "react";
import FeatureCard from "./FeatureCard";
import features from "./featuresData";

/**
 * "Everything you need" grid.
 * Maps over the features data and renders a FeatureCard for each.
 */
function Features() {
  return (
    <section className="features" id="features">
      <h2 className="section-title">EVERYTHING YOU NEED</h2>
      <p className="section-sub">
        One app for training, tracking, nutrition, and community.
      </p>
      <div className="features-grid">
        {features.map((f) => (
          <FeatureCard
            key={f.title}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
