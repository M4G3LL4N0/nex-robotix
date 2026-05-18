"use client";

import { useMemo, useState } from "react";
import { RoiVisualChart } from "./RoiVisualChart";

export function RoiEstimator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(120);
  const [hourlyCost, setHourlyCost] = useState(22);
  const [missedCost, setMissedCost] = useState(500);
  const [locations, setLocations] = useState(2);
  const [assistPct, setAssistPct] = useState(25);

  const results = useMemo(() => {
    const weeklyAssisted = (hoursPerWeek * assistPct) / 100;
    const monthlyValue =
      weeklyAssisted * hourlyCost * 4.33 + (missedCost * locations * assistPct) / 100 / 4;
    const priorityScore = Math.min(
      100,
      Math.round(assistPct * 0.4 + locations * 8 + (hoursPerWeek > 80 ? 20 : 10)),
    );
    return { weeklyAssisted, monthlyValue, priorityScore };
  }, [hoursPerWeek, hourlyCost, missedCost, locations, assistPct]);

  return (
    <div className="nex-glass rounded-lg p-4">
      <h3 className="mb-1 font-mono text-xs uppercase tracking-widest text-nex-cyan">ROI Estimator</h3>
      <p className="mb-4 text-[10px] text-nex-amber">Estimate only. Not financial advice. Actual results require pilot data.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { label: "Labor hours / week", value: hoursPerWeek, set: setHoursPerWeek, max: 500 },
          { label: "Hourly labor cost ($)", value: hourlyCost, set: setHourlyCost, max: 100 },
          { label: "Missed task cost ($/mo)", value: missedCost, set: setMissedCost, max: 10000 },
          { label: "Locations", value: locations, set: setLocations, max: 50 },
          { label: "Expected robot assist %", value: assistPct, set: setAssistPct, max: 80 },
        ].map((field) => (
          <label key={field.label} className="block text-sm sm:col-span-1">
            <span className="text-nex-muted">{field.label}</span>
            <input
              type="range"
              min={field.label.includes("%") ? 5 : 1}
              max={field.max}
              value={field.value}
              onChange={(e) => field.set(Number(e.target.value))}
              className="mt-2 w-full accent-nex-blue"
            />
            <span className="font-mono text-nex-white">{field.value}</span>
          </label>
        ))}
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <div className="rounded border border-nex-border p-3">
          <p className="text-xs text-nex-muted">Weekly hours assisted</p>
          <p className="font-mono text-xl text-nex-white">{results.weeklyAssisted.toFixed(1)}</p>
        </div>
        <div className="rounded border border-nex-border p-3">
          <p className="text-xs text-nex-muted">Monthly operational value (est.)</p>
          <p className="font-mono text-xl text-nex-cyan">${results.monthlyValue.toFixed(0)}</p>
        </div>
        <div className="rounded border border-nex-border p-3">
          <p className="text-xs text-nex-muted">Pilot priority score</p>
          <p className="font-mono text-xl text-nex-blue">{results.priorityScore}</p>
        </div>
      </div>
      <div className="mt-6">
        <RoiVisualChart
          monthlyValue={results.monthlyValue}
          weeklyHours={results.weeklyAssisted}
          priorityScore={results.priorityScore}
        />
      </div>
    </div>
  );
}
