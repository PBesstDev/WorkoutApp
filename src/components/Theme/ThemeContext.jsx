import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Theme system with system-preference detection (dark / light).
 *
 * How it works:
 * 1. On first visit we look at the user's OS setting
 *    (prefers-color-scheme) and pick dark or light to match.
 * 2. If the user has already chosen a theme (saved in localStorage),
 *    we respect that choice instead of the system.
 * 3. When the user clicks the toggle we save the new choice so it
 *    sticks across page reloads.
 * 4. We also listen for OS theme changes and follow them — but only
 *    if the user has never manually toggled.
 */

const ThemeContext = createContext();

// Helper: ask the browser what the OS currently prefers
function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Helper: decide the starting theme
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  const saved = localStorage.getItem("fittrack-theme");
  // If the user has a saved preference, use it
  if (saved === "dark" || saved === "light") {
    return saved;
  }
  // Otherwise follow the system
  return getSystemTheme();
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to <html> and remember the choice
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("fittrack-theme", theme);
  }, [theme]);

  // Listen for OS theme changes (e.g. user changes macOS/Windows setting)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Only follow the system if the user has never manually chosen
      // (we treat an empty localStorage key as "no manual choice")
      // After the first toggle we always have a value, so this stops applying.
      const saved = localStorage.getItem("fittrack-theme");
      // If the saved value matches what we would have set from system,
      // or if we want stricter: only auto-update when the user hasn't toggled.
      // Simple rule: once the user has toggled at least once, stop auto-following.
      // We detect "has toggled" by checking a second flag, or just always
      // follow only when the current theme equals the previous system value.
      // For clarity we use a dedicated flag.
      if (localStorage.getItem("fittrack-theme-manual") !== "true") {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Older Safari
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const toggleTheme = () => {
    // Mark that the user has made a manual choice
    localStorage.setItem("fittrack-theme-manual", "true");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook so components can easily access the theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}
