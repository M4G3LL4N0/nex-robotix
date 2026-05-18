import { EXTENDED_PROOF_LADDER } from "@/lib/nex-robotics-data";
import { cn } from "@/lib/utils";
import { VisualFrame } from "./VisualFrame";

const statusColor: Record<string, string> = {
  complete: "bg-emerald-500",
  current: "bg-nex-blue",
  planned: "bg-nex-muted",
  "not-proven": "bg-nex-amber/80",
};

export function ProofLadderVisual() {
  return (
    <VisualFrame title="Proof ladder" subtitle="Honest maturity stages" label="Demo">
      <div className="relative py-4">
        <div className="absolute left-4 top-4 bottom-4 w-px bg-nex-border" />
        <ul className="space-y-4 pl-10">
          {EXTENDED_PROOF_LADDER.map((item) => (
            <li key={item.stage} className="relative">
              <span
                className={cn(
                  "absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-nex-black",
                  statusColor[item.status],
                  item.current && "ring-2 ring-nex-blue ring-offset-2 ring-offset-nex-black",
                )}
              />
              <p className={cn("text-sm font-medium", item.current ? "text-nex-cyan" : "text-nex-white")}>
                {item.stage}
                {item.current && (
                  <span className="ml-2 text-[10px] font-normal uppercase text-nex-blue">You are here</span>
                )}
              </p>
              <p className="text-[11px] capitalize text-nex-muted">{item.status.replace("-", " ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </VisualFrame>
  );
}
