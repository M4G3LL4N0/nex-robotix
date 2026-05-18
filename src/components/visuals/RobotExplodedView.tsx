import { VisualFrame } from "./VisualFrame";

const LAYERS = [
  { name: "NEX Skills", color: "#3dd6f5", desc: "Task packs" },
  { name: "NEX Cloud", color: "#2d7cff", desc: "Telemetry & logs" },
  { name: "NEX Fleet", color: "#2d7cff", desc: "Fleet command" },
  { name: "NEX OS", color: "#2d7cff", desc: "Task planner" },
  { name: "Human assist", color: "#f5a623", desc: "Remote operator" },
  { name: "Sensors", color: "#8b8b96", desc: "Vision · lidar · IMU" },
  { name: "Hardware", color: "#f4f5f7", desc: "Body · actuators · power" },
];

export function RobotExplodedView({ label = "Concept" }: { label?: string }) {
  return (
    <VisualFrame title="Exploded stack view" subtitle="Software + hardware layers" label={label}>
      <div className="mx-auto max-w-md space-y-2">
        {LAYERS.map((layer, i) => (
          <div
            key={layer.name}
            className="flex items-center gap-3 rounded border border-nex-border px-3 py-2"
            style={{
              marginLeft: `${i * 4}px`,
              borderColor: `${layer.color}33`,
              background: `linear-gradient(90deg, ${layer.color}12, transparent)`,
            }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: layer.color }} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-nex-white">{layer.name}</p>
              <p className="truncate text-[10px] text-nex-muted">{layer.desc}</p>
            </div>
            <span className="font-mono text-[10px] text-nex-muted">L{7 - i}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
