"use client";

import { useMemo, useState } from "react";
import { VisualFrame } from "./VisualFrame";

const CRITERIA = [
  { key: "repeatable", label: "Repeatable tasks", weight: 18 },
  { key: "indoor", label: "Indoor routes", weight: 16 },
  { key: "route", label: "Clear workflow", weight: 16 },
  { key: "supervision", label: "Human supervision", weight: 18 },
  { key: "pain", label: "Operational pain", weight: 16 },
  { key: "safety", label: "Low safety complexity", weight: 16 },
];

export function PilotReadinessGraphic() {
  const [checks, setChecks] = useState<Record<string, boolean>>({
    repeatable: true,
    indoor: true,
    route: true,
    supervision: true,
    pain: false,
    safety: true,
  });

  const score = useMemo(() => {
    return CRITERIA.reduce((sum, c) => sum + (checks[c.key] ? c.weight : 0), 0);
  }, [checks]);

  return (
    <VisualFrame title="Pilot readiness" subtitle="Demo scoring visual" label="Estimate only">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative flex h-40 items-center justify-center">
          <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#1e1e26" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#2d7cff"
              strokeWidth="10"
              strokeDasharray={`${(score / 100) * 314} 314`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute font-mono text-3xl font-semibold text-nex-white">{score}</span>
        </div>
        <ul className="space-y-2">
          {CRITERIA.map((c) => (
            <li key={c.key}>
              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={checks[c.key]}
                  onChange={(e) => setChecks((p) => ({ ...p, [c.key]: e.target.checked }))}
                  className="accent-nex-blue"
                />
                <span className="text-nex-muted">{c.label}</span>
                <span className="ml-auto font-mono text-nex-blue">{c.weight}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </VisualFrame>
  );
}
