import React from "react";
import ProgramCard from "./ProgramCard";
import programs from "./programsData";

/**
 * Programs section — grid of available training plans.
 * Inspired by the program list on STNDRD.
 */
function Programs() {
  return (
    <section className="programs" id="programs">
      <h2 className="section-title">PROGRAMS FOR ANY GOAL</h2>
      <p className="section-sub">
        Unlock structured plans for every level. Follow a clear path, eliminate
        guesswork, and make consistent progress.
      </p>
      <div className="programs-grid">
        {programs.map((p) => (
          <ProgramCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Programs;
