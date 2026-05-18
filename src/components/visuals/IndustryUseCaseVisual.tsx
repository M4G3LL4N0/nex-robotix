import type { IndustryVisualVariant } from "@/lib/nex-robotics-data";
import { VisualFrame } from "./VisualFrame";

interface IndustryUseCaseVisualProps {
  variant: IndustryVisualVariant;
  title?: string;
}

export function IndustryUseCaseVisual({ variant, title }: IndustryUseCaseVisualProps) {
  const labels: Record<IndustryVisualVariant, string> = {
    hospitality: "Hotel corridor · room doors",
    construction: "Jobsite zone · material bay",
    warehouse: "Warehouse aisle · racks",
    retail: "Store aisle · shelves",
    office: "Office floor · supply hub",
    healthcare: "Care facility · supply path",
    restaurant: "Dining floor · service path",
    industrial: "Plant floor · line zone",
  };

  return (
    <VisualFrame title={title ?? labels[variant]} subtitle="Abstract environment scene" label="Concept">
      <svg viewBox="0 0 320 180" className="w-full h-auto" role="img" aria-label={labels[variant]}>
        <rect width="320" height="180" fill="#0c0c10" />
        <defs>
          <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2d7cff" strokeWidth="0.2" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="320" height="180" fill={`url(#grid-${variant})`} />
        {variant === "hospitality" && <HospitalityScene />}
        {variant === "construction" && <ConstructionScene />}
        {variant === "warehouse" && <WarehouseScene />}
        {variant === "retail" && <RetailScene />}
        {variant === "office" && <OfficeScene />}
        {variant === "healthcare" && <HealthcareScene />}
        {variant === "restaurant" && <RestaurantScene />}
        {variant === "industrial" && <IndustrialScene />}
        <circle cx="160" cy="150" r="8" fill="#2d7cff" opacity="0.8" />
        <text x="160" y="172" textAnchor="middle" fontSize="9" fill="#8b8b96" fontFamily="monospace">
          NEX route · supervised
        </text>
      </svg>
    </VisualFrame>
  );
}

function HospitalityScene() {
  return (
    <g stroke="#2a2a34" fill="#141418">
      {[40, 120, 200, 280].map((x) => (
        <rect key={x} x={x - 15} y="40" width="30" height="80" rx="2" />
      ))}
      <rect x="0" y="130" width="320" height="8" fill="#1e1e26" />
    </g>
  );
}

function ConstructionScene() {
  return (
    <g>
      <polygon points="0,140 80,60 160,140" fill="#141418" stroke="#2a2a34" />
      <rect x="180" y="90" width="100" height="50" fill="#141418" stroke="#f5a623" strokeWidth="0.5" opacity="0.5" />
      <line x1="0" y1="140" x2="320" y2="140" stroke="#2a2a34" />
    </g>
  );
}

function WarehouseScene() {
  return (
    <g fill="#141418" stroke="#2a2a34">
      {[30, 90, 150, 210, 270].map((x) => (
        <rect key={x} x={x} y="30" width="24" height="110" />
      ))}
    </g>
  );
}

function RetailScene() {
  return (
    <g>
      {[50, 130, 210, 290].map((x) => (
        <g key={x}>
          <rect x={x - 20} y="35" width="40" height="6" fill="#2a2a34" />
          <rect x={x - 20} y="55" width="40" height="6" fill="#2a2a34" />
          <rect x={x - 20} y="75" width="40" height="6" fill="#2a2a34" />
        </g>
      ))}
    </g>
  );
}

function OfficeScene() {
  return (
    <g fill="#141418" stroke="#2a2a34">
      <rect x="40" y="50" width="80" height="60" rx="4" />
      <rect x="200" y="50" width="80" height="60" rx="4" />
      <rect x="140" y="100" width="40" height="30" fill="#2d7cff" opacity="0.2" />
    </g>
  );
}

function HealthcareScene() {
  return (
    <g stroke="#3dd6f5" strokeWidth="0.5" fill="none" opacity="0.6">
      <rect x="60" y="50" width="200" height="80" rx="8" />
      <path d="M 100 90 L 140 90 M 120 70 L 120 110" stroke="#3dd6f5" />
    </g>
  );
}

function RestaurantScene() {
  return (
    <g fill="#141418">
      {[80, 160, 240].map((x) => (
        <circle key={x} cx={x} cy="100" r="18" stroke="#2a2a34" />
      ))}
    </g>
  );
}

function IndustrialScene() {
  return (
    <g>
      <rect x="40" y="70" width="240" height="40" fill="#141418" stroke="#2a2a34" />
      <rect x="100" y="50" width="30" height="20" fill="#2d7cff" opacity="0.3" />
      <rect x="190" y="50" width="30" height="20" fill="#2d7cff" opacity="0.3" />
    </g>
  );
}
