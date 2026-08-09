import React from "react";
import Carousel from "./Carousel/Carousel";
import Button from "./Button";
import slides from "./slides";

/**
 * Hero / landing section.
 * Big headline + short subtext + primary CTA + phone-style carousel.
 */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          YOUR TRAINING.
          <br />
          YOUR PROGRESS.
          <br />
          YOUR STANDARD.
        </h1>
        <p className="hero-sub">
          Personalized workouts that adapt to your goals. Track every set,
          follow proven programs, and join a community that holds the same
          standard.
        </p>
        <div className="hero-buttons">
          <Button variant="primary" size="large" href="#start">
            Start Training
          </Button>
          <Button variant="ghost" size="large" href="#features">
            See How It Works
          </Button>
        </div>
      </div>

      {/* Reusable carousel showing app features in phone frames */}
      <Carousel slides={slides} autoInterval={4000} />
    </section>
  );
}

export default Hero;
