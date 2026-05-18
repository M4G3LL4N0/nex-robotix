import { VisualFrame } from "./VisualFrame";

const STEPS = [
  "Operator request",
  "NEX OS planner",
  "Robot task",
  "Remote assist (if needed)",
  "Report proof",
  "Fleet learning loop",
];

export function TaskWorkflowDiagram() {
  return (
    <VisualFrame title="Task workflow" subtitle="Supervised execution loop" label="Planned">
      <div className="flex flex-col items-center gap-1 py-2">
        {STEPS.map((step, i) => (
          <div key={step} className="flex flex-col items-center gap-1">
            <div className="w-full min-w-[200px] max-w-xs rounded-lg border border-nex-border bg-nex-gunmetal/60 px-4 py-2.5 text-center text-sm text-nex-white">
              {step}
            </div>
            {i < STEPS.length - 1 && <span className="font-mono text-nex-blue">↓</span>}
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
