import { VisualFrame } from "./VisualFrame";
import { MetricCard } from "@/components/MetricCard";

export function FleetCommandGraphic() {
  return (
    <VisualFrame title="Fleet command" subtitle="Simulated command center UI" label="Demo">
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          <div className="grid grid-cols-4 gap-1 rounded-lg border border-nex-border bg-nex-black/50 p-2">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm border ${
                  [5, 6, 13, 14, 21].includes(i)
                    ? "border-nex-blue/50 bg-nex-blue/20"
                    : "border-nex-border/40 bg-nex-titanium/20"
                }`}
              />
            ))}
          </div>
          <p className="text-center font-mono text-[10px] text-nex-muted">Site map grid · Simulated</p>
        </div>
        <div className="space-y-2">
          <MetricCard label="Active" value="3" demo />
          <MetricCard label="Assist" value="1" demo />
          <div className="rounded border border-nex-border p-2 text-xs">
            <p className="mb-1 text-nex-muted">Task queue</p>
            {["Room 204 delivery", "Aisle 7 scan", "Safety walk B"].map((t) => (
              <p key={t} className="truncate py-0.5 text-nex-white/80">
                → {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}
