import { PROOF_LADDER } from "@/lib/nex-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  complete: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  "in-progress": "border-nex-blue/40 bg-nex-blue/10 text-nex-blue",
  demo: "border-nex-cyan/40 bg-nex-cyan/10 text-nex-cyan",
  planned: "border-nex-border bg-nex-gunmetal text-nex-muted",
  "not-proven": "border-nex-amber/30 bg-nex-amber/10 text-nex-amber",
};

export function InvestorProofLadder() {
  return (
    <div className="space-y-3">
      {PROOF_LADDER.map((item, i) => (
        <div
          key={item.stage}
          className="flex gap-4 rounded-lg border border-nex-border bg-nex-gunmetal/40 p-4"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-nex-border font-mono text-xs text-nex-muted">
            {i + 1}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-medium text-nex-white">{item.stage}</h4>
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide",
                  statusStyles[item.status] ?? statusStyles.planned,
                )}
              >
                {item.status.replace("-", " ")}
              </span>
            </div>
            <p className="mt-1 text-sm text-nex-muted">{item.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
