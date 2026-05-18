import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
  demo?: boolean;
  className?: string;
}

export function MetricCard({ label, value, sublabel, demo, className }: MetricCardProps) {
  return (
    <div className={cn("nex-glass rounded-lg p-4", className)}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs uppercase tracking-wider text-nex-muted">{label}</p>
        {demo && (
          <span className="rounded border border-nex-amber/30 bg-nex-amber/10 px-1.5 py-0.5 text-[10px] text-nex-amber">
            Demo
          </span>
        )}
      </div>
      <p className="mt-2 font-mono text-2xl font-semibold text-nex-white">{value}</p>
      {sublabel && <p className="mt-1 text-xs text-nex-muted">{sublabel}</p>}
    </div>
  );
}
