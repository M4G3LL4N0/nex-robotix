import { TECHNOLOGY_LAYERS } from "@/lib/nex-robotics-data";
import { StatusPill } from "@/components/StatusPill";
import { VisualFrame } from "./VisualFrame";

export function RoboticsStackDiagram() {
  return (
    <VisualFrame title="NEX robotics stack" subtitle="Body to cloud" label="Concept">
      <div className="relative mx-auto max-w-sm">
        {TECHNOLOGY_LAYERS.map((layer, i) => (
          <div
            key={layer.id}
            id={layer.id}
            className="relative mb-2 rounded-lg border border-nex-border bg-nex-gunmetal/50 px-4 py-3 scroll-mt-24"
            style={{ marginLeft: `${(TECHNOLOGY_LAYERS.length - 1 - i) * 6}px` }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-nex-white">{layer.name}</span>
              <StatusPill label={layer.label} />
            </div>
            <p className="mt-1 text-[11px] text-nex-muted">{layer.description}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
