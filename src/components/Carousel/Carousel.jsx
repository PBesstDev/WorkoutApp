import React, { useState, useEffect, useCallback } from "react";

/**
 * Reusable multi-slide carousel that looks like phone screens.
 *
 * Props:
 *   slides        — array of { icon, title, description }
 *   autoInterval  — ms between auto-advances (default 3500, pass 0 to disable)
 *   className     — extra class on the root element
 *
 * How it works (high-school friendly):
 * - We keep a "current" index in state.
 * - Each slide gets an offset from the current one (-2 … +2).
 * - Offsets map to CSS transforms so the center slide is biggest and brightest.
 * - Clicking a side slide or the arrows moves the current index.
 */

// Visual position config for each offset from current (-2 through +2)
const POSITIONS = {
  "-2": { x: -350, scale: 0.65, opacity: 0.5, zIndex: 1 },
  "-1": { x: -210, scale: 0.82, opacity: 0.85, zIndex: 2 },
  "0": { x: 0, scale: 1, opacity: 1, zIndex: 3 },
  "1": { x: 210, scale: 0.82, opacity: 0.85, zIndex: 2 },
  "2": { x: 350, scale: 0.65, opacity: 0.5, zIndex: 1 },
};

function Carousel({ slides = [], autoInterval = 3500, className = "" }) {
  const [current, setCurrent] = useState(0);

  // Move to any index (wraps around safely)
  const goTo = useCallback(
    (index) => {
      setCurrent((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto-advance timer
  useEffect(() => {
    if (!autoInterval) return;
    const timer = setInterval(next, autoInterval);
    return () => clearInterval(timer); // cleanup when component unmounts or deps change
  }, [next, autoInterval]);

  if (!slides.length) return null;

  // Shortest-path offset so the carousel feels continuous
  const getOffset = (i) => {
    let offset = i - current;
    const half = Math.floor(slides.length / 2);
    if (offset > half) offset -= slides.length;
    if (offset < -half) offset += slides.length;
    return offset;
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-track">
        {slides.map((slide, i) => {
          const offset = getOffset(i);
          // Only render the 5 nearest slides for performance
          if (Math.abs(offset) > 2) return null;
          const pos = POSITIONS[String(offset)];

          return (
            <div
              key={i}
              className="carousel-item"
              style={{
                transform: `translate(calc(-50% + ${pos.x}px), -50%) scale(${pos.scale})`,
                opacity: pos.opacity,
                zIndex: pos.zIndex,
                cursor: offset !== 0 ? "pointer" : "default",
              }}
              onClick={() => offset !== 0 && goTo(i)}
            >
              <div className="carousel-phone">
                <div className="carousel-notch" />
                <div className="carousel-slide">
                  <div className="carousel-slide-icon">{slide.icon}</div>
                  <h3 className="carousel-slide-title">{slide.title}</h3>
                  <p className="carousel-slide-desc">{slide.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " carousel-dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-btn" onClick={next} aria-label="Next slide">
          ›
        </button>
      </div>
    </div>
  );
}

export default Carousel;
