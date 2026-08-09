import React from "react";
import Button from "./Button";

/**
 * App preview / "Built for real training" section.
 * Shows a mock phone + key benefits.
 */
function Preview() {
  return (
    <section className="preview" id="pricing">
      <div className="preview-phone">
        <div className="preview-phone-inner">
          <div className="preview-notch" />
          <div className="preview-screen">
            <div className="preview-header">Today's Workout</div>
            <div className="preview-exercise">
              <span>Barbell Squat</span>
              <span>4 × 6 @ 185 lb</span>
            </div>
            <div className="preview-exercise">
              <span>Romanian Deadlift</span>
              <span>3 × 8 @ 155 lb</span>
            </div>
            <div className="preview-exercise">
              <span>Leg Press</span>
              <span>3 × 10 @ 320 lb</span>
            </div>
            <div className="preview-progress">
              <div className="preview-bar" style={{ width: "65%" }} />
            </div>
            <div className="preview-footer">2 of 5 exercises</div>
          </div>
        </div>
      </div>

      <div className="preview-text">
        <h2>BUILT FOR REAL TRAINING</h2>
        <ul className="preview-list">
          <li>Track every set with one tap</li>
          <li>See your progress week over week</li>
          <li>Follow your program, stay consistent</li>
          <li>HD form videos and coaching cues</li>
          <li>Earn XP and climb the leaderboard</li>
        </ul>
        <Button variant="primary" size="large" href="#start">
          Start Free
        </Button>
      </div>
    </section>
  );
}

export default Preview;
