"use client";

import { useState } from "react";
import { PILOT_INDUSTRIES, PILOT_WORKFLOWS, ROBOT_TYPES } from "@/lib/nex-data";

export function PilotWorkflowBuilder() {
  const [industry, setIndustry] = useState<string>(PILOT_INDUSTRIES[0]);
  const [workflow, setWorkflow] = useState<string>(PILOT_WORKFLOWS[0]);
  const [robot, setRobot] = useState(ROBOT_TYPES[0]);
  const [priority, setPriority] = useState("medium");

  const plan = `Pilot plan (demo): Deploy ${robot} for ${workflow} workflows in ${industry} environments. Priority: ${priority}. Includes workflow audit, NEX OS demo setup, safety review, and 90-day task automation roadmap. Status: Planned — requires scoping call.`;

  return (
    <div className="nex-glass rounded-lg p-4">
      <h3 className="mb-1 font-mono text-xs uppercase tracking-widest text-nex-cyan">Pilot Workflow Builder</h3>
      <p className="mb-4 text-[10px] text-nex-muted">Generates a demo pilot plan — not a binding offer</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-nex-muted">Industry</span>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="mt-1 w-full rounded border border-nex-border bg-nex-black px-3 py-2 text-nex-white"
          >
            {PILOT_INDUSTRIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Workflow</span>
          <select
            value={workflow}
            onChange={(e) => setWorkflow(e.target.value)}
            className="mt-1 w-full rounded border border-nex-border bg-nex-black px-3 py-2 text-nex-white"
          >
            {PILOT_WORKFLOWS.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Robot type</span>
          <select
            value={robot}
            onChange={(e) => setRobot(e.target.value)}
            className="mt-1 w-full rounded border border-nex-border bg-nex-black px-3 py-2 text-nex-white"
          >
            {ROBOT_TYPES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Priority</span>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 w-full rounded border border-nex-border bg-nex-black px-3 py-2 text-nex-white"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <div className="mt-4 rounded border border-nex-border bg-nex-gunmetal/50 p-3 text-sm leading-relaxed text-nex-white/90">
        {plan}
      </div>
    </div>
  );
}
