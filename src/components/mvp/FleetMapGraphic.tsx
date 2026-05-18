"use client";

import { VisualFrame } from "@/components/visuals/VisualFrame";
import { cn } from "@/lib/utils";

const ZONES = [
  { id: "lobby", label: "Lobby", active: false },
  { id: "f2", label: "Floor 2", active: true },
  { id: "dock", label: "Dock", active: false },
  { id: "site-a", label: "Jobsite A", active: true },
];

export function FleetMapGraphic({ highlightZone = "f2" }: { highlightZone?: string }) {
  return (
    <VisualFrame title="Fleet map" subtitle="Simulated site layout" label="Simulated data">
      <div className="grid grid-cols-4 gap-1.5">
        {Array.from({ length: 24 }).map((_, i) => {
          const isPath = [4, 5, 6, 10, 11, 12, 16, 17, 18].includes(i);
          const isRobot = i === 11;
          return (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-sm border text-[8px] flex items-center justify-center font-mono",
                isRobot
                  ? "border-nex-cyan bg-nex-cyan/20 text-nex-cyan"
                  : isPath
                    ? "border-nex-blue/40 bg-nex-blue/10 text-nex-muted"
                    : "border-nex-border/50 bg-nex-titanium/20 text-transparent",
              )}
            >
              {isRobot ? "●" : ""}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {ZONES.map((z) => (
          <span
            key={z.id}
            className={cn(
              "rounded px-2 py-0.5 text-[10px]",
              z.id === highlightZone ? "bg-nex-blue/20 text-nex-blue" : "text-nex-muted",
            )}
          >
            {z.label}
          </span>
        ))}
      </div>
    </VisualFrame>
  );
}
