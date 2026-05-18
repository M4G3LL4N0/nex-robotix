"use client";

import { StatusPill } from "@/components/StatusPill";
import type { RobotStatus } from "@/lib/nex-data";

export interface DemoRobot {
  id: string;
  name: string;
  model: string;
  status: RobotStatus;
  battery: number;
  location: string;
  task: string;
  autonomy: string;
  remoteAssist: boolean;
  lastReport: string;
}

export function RobotDetailPanel({ robot }: { robot: DemoRobot | null }) {
  if (!robot) {
    return (
      <div className="nex-glass flex h-full min-h-[280px] items-center justify-center rounded-lg p-6 text-sm text-nex-muted">
        Select a robot from fleet overview
      </div>
    );
  }

  return (
    <div className="nex-glass rounded-lg p-4">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-nex-white">{robot.name}</h3>
          <p className="text-sm text-nex-muted">{robot.model} · Demo unit</p>
        </div>
        <StatusPill status={robot.status} />
      </div>
      <dl className="space-y-3 text-sm">
        {[
          ["Battery", `${robot.battery}%`],
          ["Location", robot.location],
          ["Assigned task", robot.task],
          ["Autonomy mode", robot.autonomy],
          ["Remote assist", robot.remoteAssist ? "Available" : "Unavailable"],
          ["Last report", robot.lastReport],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-nex-border/50 pb-2">
            <dt className="text-nex-muted">{k}</dt>
            <dd className="text-right font-mono text-nex-white">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[10px] text-nex-amber">Simulated data — not live production telemetry</p>
    </div>
  );
}
