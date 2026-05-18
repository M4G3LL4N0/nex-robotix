import { cn } from "@/lib/utils";
import type { ClaimLabel, RobotStatus } from "@/lib/nex-data";

const statusColors: Record<RobotStatus, string> = {
  Ready: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Task": "bg-nex-blue/15 text-nex-blue border-nex-blue/30",
  "Needs Assist": "bg-nex-amber/15 text-nex-amber border-nex-amber/30",
  Charging: "bg-nex-cyan/15 text-nex-cyan border-nex-cyan/30",
  Offline: "bg-nex-muted/15 text-nex-muted border-nex-border",
};

const labelColors: Record<ClaimLabel, string> = {
  Concept: "bg-nex-titanium text-nex-muted border-nex-border",
  Prototype: "bg-nex-blue/15 text-nex-blue border-nex-blue/30",
  Demo: "bg-nex-cyan/15 text-nex-cyan border-nex-cyan/30",
  Planned: "bg-nex-gunmetal text-nex-muted border-nex-border",
  "Pilot-stage": "bg-nex-blue/10 text-nex-cyan border-nex-cyan/20",
  "Simulated data": "bg-nex-amber/10 text-nex-amber border-nex-amber/30",
};

interface StatusPillProps {
  status?: RobotStatus;
  label?: ClaimLabel | string;
  className?: string;
}

export function StatusPill({ status, label, className }: StatusPillProps) {
  if (status) {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
          statusColors[status],
          className,
        )}
      >
        <span className="nex-pulse-dot mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
        {status}
      </span>
    );
  }
  if (label) {
    const colors =
      label in labelColors
        ? labelColors[label as ClaimLabel]
        : "bg-nex-gunmetal text-nex-muted border-nex-border";
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide",
          colors,
          className,
        )}
      >
        {label}
      </span>
    );
  }
  return null;
}
