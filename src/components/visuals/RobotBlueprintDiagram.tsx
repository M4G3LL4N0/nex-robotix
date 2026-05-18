import { VisualFrame } from "./VisualFrame";

const CALLOUTS = [
  { x: 100, y: 28, label: "Vision head" },
  { x: 168, y: 90, label: "Arm actuator" },
  { x: 32, y: 90, label: "Arm actuator" },
  { x: 100, y: 120, label: "NEX OS core" },
  { x: 100, y: 175, label: "Battery bay" },
  { x: 72, y: 230, label: "Mobility base" },
  { x: 128, y: 230, label: "Mobility base" },
];

export function RobotBlueprintDiagram({ label = "Concept" }: { label?: string }) {
  return (
    <VisualFrame title="Blueprint schematic" subtitle="Planned hardware layout" label={label}>
      <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
        <svg viewBox="0 0 200 260" className="h-full w-full" role="img" aria-label="Robot blueprint diagram">
          <defs>
            <pattern id="bp-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2d7cff" strokeWidth="0.15" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="200" height="260" fill="url(#bp-grid)" opacity="0.5" />
          <g fill="none" stroke="#2d7cff" strokeWidth="0.8" opacity="0.7">
            <ellipse cx="100" cy="35" rx="20" ry="22" />
            <rect x="82" y="58" width="36" height="70" rx="3" />
            <line x1="62" y1="75" x2="42" y2="120" />
            <line x1="138" y1="75" x2="158" y2="120" />
            <rect x="70" y="130" width="60" height="40" rx="2" strokeDasharray="4 2" />
            <rect x="55" y="175" width="90" height="22" rx="4" />
            <circle cx="75" cy="220" r="16" />
            <circle cx="125" cy="220" r="16" />
          </g>
          {CALLOUTS.map((c) => (
            <g key={c.label}>
              <circle cx={c.x} cy={c.y} r="2" fill="#3dd6f5" />
              <text x={c.x + (c.x > 100 ? 6 : -6)} y={c.y + 3} fontSize="7" fill="#8b8b96" textAnchor={c.x > 100 ? "start" : "end"}>
                {c.label}
              </text>
            </g>
          ))}
          <text x="100" y="252" textAnchor="middle" fontSize="8" fill="#3dd6f5" fontFamily="monospace">
            NEX OS ↔ sensors ↔ actuators
          </text>
        </svg>
      </div>
    </VisualFrame>
  );
}
