import type { ClaimLabel } from "./nex-data";

export type RobotVisualVariant =
  | "humanoid-full"
  | "wheeled-semi"
  | "industrial-cart"
  | "patrol"
  | "assist"
  | "retail-shelf";

export type IndustryVisualVariant =
  | "hospitality"
  | "construction"
  | "warehouse"
  | "retail"
  | "office"
  | "healthcare"
  | "restaurant"
  | "industrial";

export interface RobotPageDetail {
  slug: string;
  visualVariant: RobotVisualVariant;
  specs: { label: string; value: string }[];
  pilotUseCases: string[];
  demoStates: string[];
  workflows: string[];
  safetyNotes?: string[];
}

export const EXTENDED_PROOF_LADDER = [
  { stage: "Idea", status: "complete" as const, current: false },
  { stage: "Concept", status: "complete" as const, current: false },
  { stage: "Demo", status: "current" as const, current: true },
  { stage: "Prototype", status: "planned" as const, current: false },
  { stage: "Pilot", status: "planned" as const, current: false },
  { stage: "Paid Pilot", status: "not-proven" as const, current: false },
  { stage: "Fleet Deployment", status: "not-proven" as const, current: false },
];

export const ROBOT_PAGE_DETAILS: Record<string, RobotPageDetail> = {
  "nex-mini": {
    slug: "nex-mini",
    visualVariant: "wheeled-semi",
    specs: [
      { label: "Form factor", value: "Wheeled semi-humanoid (concept)" },
      { label: "Height", value: "~1.2m planned" },
      { label: "Payload", value: "TBD — pilot scoping" },
      { label: "Runtime", value: "Target 6–8h (planned)" },
      { label: "Connectivity", value: "Wi‑Fi / LTE concept" },
      { label: "Sensors", value: "Depth cam, lidar concept, IMU" },
    ],
    pilotUseCases: ["Hotel corridor delivery", "Room scan + photo report", "Lobby restock", "Facilities supply run"],
    demoStates: ["Standby", "Navigating (supervised)", "In task", "Assist requested", "Charging"],
    workflows: ["Towel delivery", "Room turnover scan", "Amenity restock", "Maintenance alert photo"],
  },
  "nex-one": {
    slug: "nex-one",
    visualVariant: "humanoid-full",
    specs: [
      { label: "Form factor", value: "Full humanoid (concept)" },
      { label: "DOF", value: "Planned human-scale articulation" },
      { label: "Manipulation", value: "Dual-arm concept" },
      { label: "Intelligence", value: "NEX OS + supervised learning" },
      { label: "Speech", value: "Operator/guest interface concept" },
      { label: "Status", value: "Long-term platform — not in pilot yet" },
    ],
    pilotUseCases: ["Advanced manipulation (future)", "Multi-step room workflows", "Construction assist (future)"],
    demoStates: ["Concept render only", "Simulation planned", "No physical unit claimed"],
    workflows: ["General physical tasks", "Supervised skill learning", "Remote expert handoff"],
  },
  "nex-build": {
    slug: "nex-build",
    visualVariant: "industrial-cart",
    specs: [
      { label: "Environment", value: "Indoor/outdoor jobsite (scoped)" },
      { label: "Mobility", value: "All-terrain base concept" },
      { label: "Tool tray", value: "Modular payload bay" },
      { label: "Cameras", value: "360° documentation concept" },
      { label: "Status", value: "Concept" },
    ],
    pilotUseCases: ["Tool delivery run", "Jobsite photo documentation", "Safety walk with human lead"],
    demoStates: ["Planned prototype", "Supervised navigation", "Remote assist default on jobsite"],
    workflows: ["Tool run", "Material count assist", "Punch list capture", "Progress photos"],
    safetyNotes: ["Jobsite safety review required", "No active-zone autonomy claimed"],
  },
  "nex-hotel": {
    slug: "nex-hotel",
    visualVariant: "wheeled-semi",
    specs: [
      { label: "Optimized for", value: "Guest floors & corridors" },
      { label: "Quiet ops", value: "Low-noise drive concept" },
      { label: "Guest interface", value: "Minimal — staff-supervised" },
      { label: "Status", value: "Concept — hospitality variant" },
    ],
    pilotUseCases: ["Towel & amenity delivery", "Room status scan", "Trash check", "Guest item delivery"],
    demoStates: ["Corridor nav (supervised)", "Elevator workflow TBD", "Night shift restock"],
    workflows: ["Room service assist", "Housekeeping checklist", "Photo report to PMS concept"],
  },
  "nex-carry": {
    slug: "nex-carry",
    visualVariant: "industrial-cart",
    specs: [
      { label: "Environment", value: "Warehouse aisles" },
      { label: "Payload", value: "Shelf + tote handling concept" },
      { label: "Scanning", value: "Barcode / RFID concept" },
      { label: "Status", value: "Concept" },
    ],
    pilotUseCases: ["Aisle inventory scan", "Dock label check", "Returns sort assist", "Box move (light)"],
    demoStates: ["Aisle follow mode (supervised)", "Scan & confirm", "Charging at dock"],
    workflows: ["Inventory audit", "Pick assist", "Label verification", "Dock support"],
  },
  "nex-assist": {
    slug: "nex-assist",
    visualVariant: "assist",
    specs: [
      { label: "Classification", value: "Not a medical device" },
      { label: "Tasks", value: "Non-clinical support only" },
      { label: "Privacy", value: "Consent-first design principle" },
      { label: "Status", value: "Early concept" },
    ],
    pilotUseCases: ["Supply delivery", "Linen movement", "Non-medical check-in assist"],
    demoStates: ["Concept only", "Requires facility privacy review"],
    workflows: ["Supply run", "Linen cart assist", "Family notification relay concept"],
    safetyNotes: [
      "Not for diagnosis or treatment",
      "Human supervision required",
      "HIPAA-aligned review before any pilot",
    ],
  },
  "nex-retail": {
    slug: "nex-retail",
    visualVariant: "retail-shelf",
    specs: [
      { label: "Environment", value: "Store floor & aisles" },
      { label: "Shelf reach", value: "Adjustable mast concept" },
      { label: "Scanning", value: "Shelf vision concept" },
      { label: "Status", value: "Concept" },
    ],
    pilotUseCases: ["Shelf scan", "Restock assist", "Price check", "Fitting room reset"],
    demoStates: ["After-hours operation preferred", "Customer zone = supervised"],
    workflows: ["Shelf audit", "Restock verification", "Floor scan", "Direction assist concept"],
  },
  "nex-office": {
    slug: "nex-office",
    visualVariant: "patrol",
    specs: [
      { label: "Environment", value: "Office & campus" },
      { label: "Patrol", value: "Overnight supply & walk concept" },
      { label: "Status", value: "Concept" },
    ],
    pilotUseCases: ["Supply closet check", "Meeting room reset assist", "Leak/sensor alert photo"],
    demoStates: ["Night patrol (supervised)", "Room reset checklist"],
    workflows: ["Supply audit", "Room reset", "Overnight walk", "Issue photo report"],
  },
  "nex-guard": {
    slug: "nex-guard",
    visualVariant: "patrol",
    specs: [
      { label: "Purpose", value: "Inspection & safety reporting" },
      { label: "Not", value: "Aggressive security or enforcement" },
      { label: "Sensors", value: "Thermal/leak detection concept" },
      { label: "Status", value: "Concept" },
    ],
    pilotUseCases: ["Safety walk", "Exits & lighting check", "Leak detection alert", "Documentation"],
    demoStates: ["Supervised patrol route", "Alert to facilities dashboard"],
    workflows: ["Safety walk", "Inspection photo log", "Maintenance ticket trigger"],
    safetyNotes: ["Inspection support only — not a security weapon platform"],
  },
};

export const USE_CASES = [
  { id: "delivery", name: "Delivery", description: "Move items between rooms, zones, or jobsite points." },
  { id: "inspection", name: "Inspection", description: "Capture photos, scans, and checklist proof." },
  { id: "scanning", name: "Scanning", description: "Room, shelf, or inventory visual audit." },
  { id: "restocking", name: "Restocking", description: "Amenity, supply, or shelf replenishment assist." },
  { id: "room-turnover", name: "Room turnover", description: "STR/hotel room reset and status reporting." },
  { id: "tool-run", name: "Tool running", description: "Construction tool and material delivery." },
  { id: "material-move", name: "Material movement", description: "Light payload moves in warehouse or site." },
  { id: "safety-walk", name: "Safety walk", description: "Documented walk with human-defined route." },
  { id: "supply-delivery", name: "Supply delivery", description: "Closets, docks, and floor supply runs." },
  { id: "inventory-audit", name: "Inventory audit", description: "Aisle scan and count verification." },
];

export const TECHNOLOGY_LAYERS = [
  { id: "body", name: "NEX Robot Body", description: "Hardware platform, chassis, actuation, power.", label: "Concept" as ClaimLabel },
  { id: "motion", name: "NEX Motion", description: "Locomotion, manipulation, balance planning.", label: "Planned" as ClaimLabel },
  { id: "vision", name: "NEX Vision", description: "Perception, mapping, object ID, inspection.", label: "Concept" as ClaimLabel },
  { id: "os", name: "NEX OS", description: "Task planning, safety policies, workflow runtime.", label: "Planned" as ClaimLabel },
  { id: "fleet", name: "NEX Fleet", description: "Multi-robot command, queue, site context.", label: "Demo" as ClaimLabel },
  { id: "cloud", name: "NEX Cloud", description: "Logs, telemetry, OTA, training pipeline.", label: "Planned" as ClaimLabel },
  { id: "skills", name: "NEX Skills", description: "Vertical task packs and workflow templates.", label: "Planned" as ClaimLabel },
  { id: "control", name: "NEX Control", description: "Teleoperation and human-in-the-loop assist.", label: "Pilot-stage" as ClaimLabel },
];

export const ROBOTICS_TOPICS = [
  { title: "Humanoid robotics", href: "/robotics#humanoid" },
  { title: "Mobile manipulation", href: "/robotics#manipulation" },
  { title: "Robot fleet management", href: "/technology#nex-fleet" },
  { title: "Robot operating systems", href: "/technology#nex-os" },
  { title: "Teleoperation", href: "/teleoperation" },
  { title: "Physical AI", href: "/robotics#physical-ai" },
  { title: "Robot safety", href: "/safety" },
  { title: "Pilot deployment", href: "/pilot" },
  { title: "Commercial robotics", href: "/use-cases" },
];

export const VISUAL_SYSTEM_CATALOG = [
  { name: "RobotSilhouette", purpose: "Product reveal silhouettes by form factor" },
  { name: "RobotBlueprintDiagram", purpose: "Technical schematic with sensor callouts" },
  { name: "RobotExplodedView", purpose: "Hardware + software stack layers" },
  { name: "FleetCommandGraphic", purpose: "Command center UI mockup" },
  { name: "TaskWorkflowDiagram", purpose: "Request-to-learning loop" },
  { name: "RoboticsStackDiagram", purpose: "Full NEX technology stack" },
  { name: "IndustryUseCaseVisual", purpose: "Abstract environment scenes" },
  { name: "PilotReadinessGraphic", purpose: "Pilot fit scoring visual" },
  { name: "ProofLadderVisual", purpose: "Honest maturity ladder" },
];

export const SAFETY_PRINCIPLES = [
  "Supervised autonomy by default in early pilots",
  "Human-in-the-loop for edge cases and assist requests",
  "Site-specific safety review before any deployment plan",
  "Privacy and consent review for guest-facing or healthcare-adjacent sites",
  "No claim of certification unless explicitly proven",
  "Clear operator override and estop concepts in NEX Control",
];

export const TELEOPERATION_FEATURES = [
  "Remote operator console (pilot-stage concept)",
  "Low-latency video feed concept",
  "Supervised takeover for complex manipulation",
  "Assist request queue from fleet dashboard",
  "Session logging for training data pipeline",
];
