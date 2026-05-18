import { cn } from "@/lib/utils";
import type { RobotVisualVariant } from "@/lib/nex-robotics-data";
import { VisualFrame } from "./VisualFrame";

interface RobotSilhouetteProps {
  variant?: RobotVisualVariant;
  label?: string;
  className?: string;
  compact?: boolean;
}

export function RobotSilhouette({
  variant = "wheeled-semi",
  label = "Concept",
  className,
  compact,
}: RobotSilhouetteProps) {
  return (
    <VisualFrame title="NEX Robot" label={label} className={className}>
      <div
        className={cn(
          "relative flex items-center justify-center nex-grid-bg rounded-lg bg-nex-black/40",
          compact ? "h-36" : "h-52 md:h-64",
        )}
      >
        <svg
          viewBox="0 0 200 280"
          className={cn("h-full w-auto max-w-[180px]", compact && "max-w-[120px]")}
          role="img"
          aria-label={`NEX robot silhouette ${variant}`}
        >
          <defs>
            <linearGradient id="nex-body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d7cff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2d7cff" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          {variant === "humanoid-full" && <HumanoidFull />}
          {variant === "wheeled-semi" && <WheeledSemi />}
          {variant === "industrial-cart" && <IndustrialCart />}
          {variant === "patrol" && <PatrolUnit />}
          {variant === "assist" && <AssistUnit />}
          {variant === "retail-shelf" && <RetailShelf />}
        </svg>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between font-mono text-[9px] text-nex-muted">
          <span>NEX</span>
          <span className="text-nex-cyan">{variant.replace("-", " ")}</span>
        </div>
      </div>
    </VisualFrame>
  );
}

function HumanoidFull() {
  return (
    <g stroke="#2d7cff" strokeWidth="1" fill="url(#nex-body-grad)">
      <ellipse cx="100" cy="36" rx="22" ry="26" />
      <rect x="82" y="62" width="36" height="72" rx="5" />
      <rect x="52" y="68" width="18" height="58" rx="4" fill="#141418" />
      <rect x="130" y="68" width="18" height="58" rx="4" fill="#141418" />
      <rect x="78" y="138" width="20" height="88" rx="4" fill="#141418" />
      <rect x="102" y="138" width="20" height="88" rx="4" fill="#141418" />
      <ellipse cx="88" cy="232" rx="14" ry="8" fill="#1e1e26" />
      <ellipse cx="112" cy="232" rx="14" ry="8" fill="#1e1e26" />
    </g>
  );
}

function WheeledSemi() {
  return (
    <g stroke="#2d7cff" strokeWidth="1">
      <ellipse cx="100" cy="40" rx="20" ry="22" fill="url(#nex-body-grad)" />
      <rect x="84" y="62" width="32" height="56" rx="4" fill="url(#nex-body-grad)" />
      <rect x="58" y="70" width="14" height="44" rx="3" fill="#141418" stroke="#2a2a34" />
      <rect x="128" y="70" width="14" height="44" rx="3" fill="#141418" stroke="#2a2a34" />
      <rect x="55" y="118" width="90" height="28" rx="6" fill="#141418" stroke="#2d7cff" />
      <circle cx="70" cy="158" r="18" fill="#1e1e26" stroke="#2d7cff" />
      <circle cx="130" cy="158" r="18" fill="#1e1e26" stroke="#2d7cff" />
    </g>
  );
}

function IndustrialCart() {
  return (
    <g stroke="#2d7cff" strokeWidth="1">
      <rect x="50" y="100" width="100" height="50" rx="6" fill="url(#nex-body-grad)" />
      <rect x="60" y="60" width="80" height="44" rx="4" fill="#141418" stroke="#2a2a34" />
      <rect x="70" y="30" width="60" height="32" rx="3" fill="url(#nex-body-grad)" opacity="0.7" />
      <circle cx="65" cy="168" r="20" fill="#1e1e26" stroke="#2d7cff" />
      <circle cx="135" cy="168" r="20" fill="#1e1e26" stroke="#2d7cff" />
      <circle cx="65" cy="168" r="8" fill="#2d7cff" opacity="0.3" />
      <circle cx="135" cy="168" r="8" fill="#2d7cff" opacity="0.3" />
    </g>
  );
}

function PatrolUnit() {
  return (
    <g stroke="#2d7cff" strokeWidth="1">
      <rect x="70" y="50" width="60" height="70" rx="8" fill="url(#nex-body-grad)" />
      <circle cx="100" cy="42" r="16" fill="url(#nex-body-grad)" />
      <rect x="55" y="120" width="90" height="24" rx="4" fill="#141418" />
      <circle cx="72" cy="158" r="16" fill="#1e1e26" stroke="#2d7cff" />
      <circle cx="128" cy="158" r="16" fill="#1e1e26" stroke="#2d7cff" />
    </g>
  );
}

function AssistUnit() {
  return (
    <g stroke="#3dd6f5" strokeWidth="1">
      <rect x="75" y="70" width="50" height="80" rx="10" fill="url(#nex-body-grad)" opacity="0.85" />
      <circle cx="100" cy="48" r="18" fill="url(#nex-body-grad)" />
      <rect x="85" y="95" width="30" height="20" rx="2" fill="none" stroke="#3dd6f5" strokeDasharray="3 2" />
      <circle cx="78" cy="168" r="14" fill="#1e1e26" stroke="#3dd6f5" />
      <circle cx="122" cy="168" r="14" fill="#1e1e26" stroke="#3dd6f5" />
    </g>
  );
}

function RetailShelf() {
  return (
    <g stroke="#2d7cff" strokeWidth="1">
      <line x1="40" y1="200" x2="160" y2="200" stroke="#2a2a34" />
      <rect x="45" y="120" width="110" height="8" fill="#2a2a34" />
      <rect x="45" y="160" width="110" height="8" fill="#2a2a34" />
      <rect x="85" y="80" width="30" height="120" rx="4" fill="url(#nex-body-grad)" />
      <circle cx="100" cy="60" r="14" fill="url(#nex-body-grad)" />
      <circle cx="100" cy="210" r="12" fill="#1e1e26" stroke="#2d7cff" />
    </g>
  );
}
