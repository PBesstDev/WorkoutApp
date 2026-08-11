import React from "react";
import Button from "../Button";
import ThemeToggle from "../Theme/ThemeToggle";

/**
 * Top navigation bar.
 * Includes the dark / light mode toggle.
 */
function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          FITTRACK
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#programs">Programs</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
          <ThemeToggle />
          <Button variant="outline" href="/login" className="nav-login">
            Log In
          </Button>
          <Button variant="primary" href="#start">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
