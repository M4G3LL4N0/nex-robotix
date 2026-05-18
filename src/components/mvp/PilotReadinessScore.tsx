"use client";

import { useMemo, useState } from "react";

const CRITERIA = [
  { key: "repeatable", label: "Repeatable daily tasks" },
  { key: "indoor", label: "Primarily indoor environment" },
  { key: "route", label: "Clear routes / floor plans" },
  { key: "supervision", label: "Human supervision available" },
  { key: "pain", label: "High labor pain / staffing gaps" },
  { key: "safety", label: "Low safety complexity" },
] as const;

export function PilotReadinessScore() {
  const [checks, setChecks] = useState<Record<string, boolean>>({
    repeatable: true,
    indoor: true,
    route: true,
    supervision: true,
    pain: false,
    safety: true,
  });

  const { score, verdict } = useMemo(() => {
    const count = Object.values(checks).filter(Boolean).length;
    const score = Math.round((count / CRITERIA.length) * 100);
    let verdict = "Needs scoping";
    if (score >= 75) verdict = "Strong pilot candidate";
    else if (score >= 50) verdict = "Moderate pilot candidate";
    return { score, verdict };
  }, [checks]);

  return (
    <div className="nex-glass rounded-lg p-4">
      <h3 className="mb-1 font-mono text-xs uppercase tracking-widest text-nex-cyan">Pilot Readiness Score</h3>
      <p className="mb-4 text-[10px] text-nex-muted">Self-assessment tool — demo scoring only</p>
      <ul className="space-y-2">
        {CRITERIA.map((c) => (
          <li key={c.key}>
            <label className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={checks[c.key]}
                onChange={(e) => setChecks((prev) => ({ ...prev, [c.key]: e.target.checked }))}
                className="h-4 w-4 rounded border-nex-border accent-nex-blue"
              />
              <span className="text-nex-white/90">{c.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between rounded border border-nex-border bg-nex-gunmetal/50 p-4">
        <div>
          <p className="text-xs text-nex-muted">Score</p>
          <p className="font-mono text-3xl text-nex-blue">{score}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-nex-muted">Verdict</p>
          <p className="text-sm font-medium text-nex-cyan">{verdict}</p>
        </div>
      </div>
    </div>
  );
}
