"use client";

import { StatusPill } from "@/components/StatusPill";
import { cn } from "@/lib/utils";
import type { DemoRobot } from "./RobotDetailPanel";

export function FleetOverview({
  robots,
  selectedId,
  onSelect,
}: {
  robots: DemoRobot[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="nex-glass rounded-lg p-4">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-nex-cyan">Fleet Overview</h3>
      <p className="mb-3 text-[10px] text-nex-amber">Simulated data</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {robots.map((robot) => (
          <button
            key={robot.id}
            type="button"
            onClick={() => onSelect(robot.id)}
            className={cn(
              "rounded border p-3 text-left transition",
              selectedId === robot.id
                ? "border-nex-blue bg-nex-blue/10"
                : "border-nex-border bg-nex-gunmetal/40 hover:border-nex-blue/30",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-nex-white">{robot.name}</span>
              <StatusPill status={robot.status} />
            </div>
            <p className="mt-1 font-mono text-xs text-nex-muted">{robot.battery}% · {robot.location}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
