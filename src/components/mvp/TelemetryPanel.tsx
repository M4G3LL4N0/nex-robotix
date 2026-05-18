"use client";

import { VisualFrame } from "@/components/visuals/VisualFrame";
import type { DemoRobot } from "./RobotDetailPanel";

export function TelemetryPanel({ robot }: { robot: DemoRobot | null }) {
  const metrics = robot
    ? [
        { label: "Battery", value: `${robot.battery}%`, bar: robot.battery },
        { label: "CPU load", value: "34%", bar: 34 },
        { label: "Link quality", value: "92%", bar: 92 },
        { label: "Motor temp", value: "41°C", bar: 55 },
      ]
    : [];

  return (
    <VisualFrame title="Telemetry" subtitle="Simulated sensor panel" label="Simulated data">
      {!robot ? (
        <p className="py-8 text-center text-sm text-nex-muted">Select a robot</p>
      ) : (
        <ul className="space-y-3">
          {metrics.map((m) => (
            <li key={m.label}>
              <div className="flex justify-between text-xs">
                <span className="text-nex-muted">{m.label}</span>
                <span className="font-mono text-nex-white">{m.value}</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-nex-titanium">
                <div className="h-full rounded-full bg-nex-blue" style={{ width: `${m.bar}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </VisualFrame>
  );
}
