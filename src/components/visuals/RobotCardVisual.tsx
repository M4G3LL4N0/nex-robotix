import type { RobotVisualVariant } from "@/lib/nex-robotics-data";
import { cn } from "@/lib/utils";

interface RobotCardVisualProps {
  variant: RobotVisualVariant;
  className?: string;
}

export function RobotCardVisual({ variant, className }: RobotCardVisualProps) {
  return (
    <div
      className={cn(
        "relative flex h-28 items-center justify-center overflow-hidden rounded-lg border border-nex-border bg-nex-black/50 nex-grid-bg",
        className,
      )}
    >
      <svg viewBox="0 0 100 120" className="h-20 w-auto opacity-90" aria-hidden>
        <defs>
          <linearGradient id="card-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d7cff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2d7cff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {variant === "humanoid-full" && (
          <g stroke="#2d7cff" fill="url(#card-grad)" strokeWidth="0.8">
            <ellipse cx="50" cy="18" rx="10" ry="12" />
            <rect x="42" y="30" width="16" height="36" rx="2" />
            <rect x="30" y="34" width="8" height="28" fill="#141418" />
            <rect x="62" y="34" width="8" height="28" fill="#141418" />
          </g>
        )}
        {variant === "wheeled-semi" && (
          <g stroke="#2d7cff" strokeWidth="0.8">
            <ellipse cx="50" cy="20" rx="10" ry="11" fill="url(#card-grad)" />
            <rect x="42" y="32" width="16" height="28" rx="2" fill="url(#card-grad)" />
            <rect x="28" y="58" width="44" height="12" rx="3" fill="#141418" />
            <circle cx="36" cy="78" r="10" fill="#1e1e26" stroke="#2d7cff" />
            <circle cx="64" cy="78" r="10" fill="#1e1e26" stroke="#2d7cff" />
          </g>
        )}
        {(variant === "industrial-cart" || variant === "patrol") && (
          <g stroke="#2d7cff" strokeWidth="0.8">
            <rect x="25" y="45" width="50" height="28" rx="4" fill="url(#card-grad)" />
            <rect x="32" y="28" width="36" height="18" rx="2" fill="#141418" />
            <circle cx="35" cy="82" r="10" fill="#1e1e26" stroke="#2d7cff" />
            <circle cx="65" cy="82" r="10" fill="#1e1e26" stroke="#2d7cff" />
          </g>
        )}
        {variant === "assist" && (
          <g stroke="#3dd6f5" strokeWidth="0.8">
            <rect x="35" y="40" width="30" height="40" rx="6" fill="url(#card-grad)" />
            <circle cx="50" cy="28" r="10" fill="url(#card-grad)" />
          </g>
        )}
        {variant === "retail-shelf" && (
          <g stroke="#2d7cff" strokeWidth="0.8">
            <line x1="15" y1="95" x2="85" y2="95" stroke="#2a2a34" />
            <rect x="20" y="55" width="60" height="5" fill="#2a2a34" />
            <rect x="42" y="35" width="16" height="60" rx="2" fill="url(#card-grad)" />
          </g>
        )}
      </svg>
    </div>
  );
}
