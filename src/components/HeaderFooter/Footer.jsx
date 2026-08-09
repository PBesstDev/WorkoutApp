import React from "react";

/**
 * Simple footer with brand message and links.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">FITTRACK</div>
          <p>Your training. Your progress. Your standard.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#programs">Programs</a>
          <a href="#results">Results</a>
          <a href="/login">Log In</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} FitTrack. Built for real training.
        </div>
      </div>
      {/* Scrolling marquee inspired by STNDRD */}
      <div className="marquee">
        <div className="marquee-track">
          {Array(12)
            .fill("SET THE STANDARD  •  ")
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
