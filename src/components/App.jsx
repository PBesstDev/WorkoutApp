import React from "react";
import { ThemeProvider } from "./Theme/ThemeContext";
import Header from "./HeaderFooter/Header";
import Hero from "./Hero";
import Features from "./Features";
import Programs from "./Programs";
import Transformations from "./Transformations";
import Preview from "./Preview";
import CTA from "./CTA";
import Footer from "./HeaderFooter/Footer";

/**
 * Main App component.
 * Wrapped in ThemeProvider so any child can use the dark/light toggle.
 * Simply composes the modular sections in order.
 */
function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Transformations />
        <Preview />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
