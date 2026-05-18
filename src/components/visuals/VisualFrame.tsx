import { StatusPill } from "@/components/StatusPill";
import { cn } from "@/lib/utils";
import type { ClaimLabel } from "@/lib/nex-data";

interface VisualFrameProps {
  title?: string;
  subtitle?: string;
  label?: ClaimLabel | string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function VisualFrame({ title, subtitle, label, children, className, id }: VisualFrameProps) {
  return (
    <figure
      id={id}
      className={cn(
        "nex-glass nex-glow relative overflow-hidden rounded-xl border border-nex-border",
        className,
      )}
      aria-label={title}
    >
      {(title || label) && (
        <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-nex-border px-4 py-3">
          <div>
            {title && <p className="font-mono text-xs uppercase tracking-widest text-nex-cyan">{title}</p>}
            {subtitle && <p className="mt-0.5 text-[11px] text-nex-muted">{subtitle}</p>}
          </div>
          {label && <StatusPill label={label} />}
        </figcaption>
      )}
      <div className="relative p-4">{children}</div>
    </figure>
  );
}
