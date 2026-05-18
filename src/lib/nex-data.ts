export type ClaimLabel =
  | "Concept"
  | "Prototype"
  | "Demo"
  | "Planned"
  | "Pilot-stage"
  | "Simulated data";

export type RobotStatus =
  | "Ready"
  | "In Task"
  | "Needs Assist"
  | "Charging"
  | "Offline";

export interface RobotModel {
  slug: string;
  name: string;
  tagline: string;
  label: ClaimLabel;
  description: string;
  href: string;
  capabilities: string[];
  formFactor?: string;
}

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  workflows: string[];
  href?: string;
}

export interface PlatformLayer {
  id: string;
  name: string;
  description: string;
  features: string[];
  label: ClaimLabel;
}

export const BRAND = {
  name: "NEX Robotix",
  short: "NEX",
  tagline: "Physical intelligence for real work.",
  supportLines: [
    "Humanoid robotics systems for real-world labor.",
    "Robots built for work, fleets built for scale.",
    "The physical workforce layer for the AI age.",
  ],
};

export const ECOSYSTEM = [
  { name: "NEX Mini", href: "/robots/nex-mini", label: "Prototype" as ClaimLabel },
  { name: "NEX One", href: "/robots/nex-one", label: "Concept" as ClaimLabel },
  { name: "NEX OS", href: "/platform#nex-os", label: "Planned" as ClaimLabel },
  { name: "NEX Fleet", href: "/platform#nex-fleet", label: "Demo" as ClaimLabel },
  { name: "NEX Skills", href: "/platform#nex-skills", label: "Planned" as ClaimLabel },
  { name: "NEX Cloud", href: "/platform#nex-cloud", label: "Planned" as ClaimLabel },
];

export const FIRST_MARKETS = [
  "Hospitality",
  "Short-term rentals",
  "Construction",
  "Logistics",
  "Facilities",
  "Healthcare support",
  "Retail",
  "Offices",
];

export const ROBOTS: RobotModel[] = [
  {
    slug: "nex-mini",
    name: "NEX Mini",
    tagline: "First commercial prototype",
    label: "Prototype",
    description:
      "Wheeled semi-humanoid robot for hospitality, facilities, construction support, and logistics.",
    href: "/robots/nex-mini",
    formFactor: "Wheeled semi-humanoid",
    capabilities: [
      "Remote operator mode",
      "Autonomous navigation concept",
      "Object delivery",
      "Room scanning",
      "Photo reporting",
      "Task checklist execution",
      "Fleet dashboard integration",
    ],
  },
  {
    slug: "nex-one",
    name: "NEX One",
    tagline: "Flagship humanoid concept",
    label: "Concept",
    description:
      "Long-term full humanoid platform for advanced physical work in commercial environments.",
    href: "/robots/nex-one",
    formFactor: "Full humanoid",
    capabilities: [
      "Human-scale movement concept",
      "Task intelligence",
      "Speech interface concept",
      "Manipulation concept",
      "Learning from supervised workflows",
      "NEX OS integration",
    ],
  },
  {
    slug: "nex-build",
    name: "NEX Build",
    tagline: "Construction site support",
    label: "Concept",
    description: "Planned construction site support robot for tool runs, documentation, and safety walks.",
    href: "/robots/nex-build",
    capabilities: ["Tool delivery", "Jobsite photos", "Safety walks", "Progress documentation"],
  },
  {
    slug: "nex-hotel",
    name: "NEX Hotel",
    tagline: "Hospitality operations",
    label: "Concept",
    description: "Planned hospitality operations robot for room service workflows and guest support tasks.",
    href: "/robots/nex-hotel",
    capabilities: ["Towel delivery", "Room scan", "Amenity restock", "Photo reporting"],
  },
  {
    slug: "nex-carry",
    name: "NEX Carry",
    tagline: "Warehouse and logistics",
    label: "Concept",
    description: "Planned warehouse and logistics robot for inventory and dock support workflows.",
    href: "/robots/nex-carry",
    capabilities: ["Inventory scanning", "Box movement", "Dock support", "Label checks"],
  },
  {
    slug: "nex-assist",
    name: "NEX Assist",
    tagline: "Healthcare and elder-support concept",
    label: "Concept",
    description:
      "Early concept for non-clinical support tasks. Not a medical device. Requires human supervision and strict privacy controls.",
    href: "/robots/nex-assist",
    capabilities: [
      "Supply delivery concept",
      "Linen movement concept",
      "Non-medical check-ins concept",
      "Family notifications concept",
    ],
  },
  {
    slug: "nex-retail",
    name: "NEX Retail",
    tagline: "Retail operations",
    label: "Concept",
    description: "Planned retail shelf and store operations robot for scanning and restocking workflows.",
    href: "/robots/nex-retail",
    capabilities: ["Shelf scanning", "Restocking", "Price checks", "Fitting room reset"],
  },
  {
    slug: "nex-office",
    name: "NEX Office",
    tagline: "Office and facilities",
    label: "Concept",
    description: "Planned office and facilities robot for supply checks and overnight patrol concepts.",
    href: "/robots/nex-office",
    capabilities: ["Room reset", "Supply checks", "Overnight patrol concept"],
  },
  {
    slug: "nex-guard",
    name: "NEX Guard",
    tagline: "Inspection and facility safety",
    label: "Concept",
    description:
      "Inspection and facility safety robot concept — focused on safety walks and reporting, not aggressive security.",
    href: "/robots/nex-guard",
    capabilities: ["Safety walk", "Leak detection concept", "Inspection support", "Alert reporting"],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Hotels, STR operations, and guest-facing properties with repeatable room workflows.",
    href: "/industries/hospitality",
    workflows: [
      "Towel delivery",
      "Room scan",
      "Amenity restock",
      "Trash check",
      "Photo report",
      "Maintenance alert",
      "Guest item delivery",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    summary: "Jobsites where tool runs, documentation, and safety walks repeat daily.",
    href: "/industries/construction",
    workflows: [
      "Tool delivery",
      "Material counts",
      "Jobsite photos",
      "Safety walks",
      "Punch list capture",
      "Progress documentation",
      "Blueprint assistant concept",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary: "Warehouses and distribution centers with scanning and movement workflows.",
    workflows: [
      "Inventory scanning",
      "Box movement",
      "Returns sorting",
      "Dock support",
      "Label checks",
    ],
  },
  {
    slug: "facilities",
    name: "Facilities",
    summary: "Commercial buildings and campuses with overnight and reset workflows.",
    workflows: [
      "Room reset",
      "Supply checks",
      "Leak detection concept",
      "Safety walk",
      "Overnight patrol",
    ],
  },
  {
    slug: "healthcare-support",
    name: "Healthcare support",
    summary:
      "Non-clinical support tasks only. Not a medical device. Requires consent, privacy review, and human supervision.",
    workflows: [
      "Supply delivery",
      "Linen movement",
      "Non-medical check-ins",
      "Family notifications",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    summary: "Store operations with shelf and floor workflows.",
    workflows: [
      "Shelf scanning",
      "Restocking",
      "Price checks",
      "Fitting room reset",
      "Customer directions concept",
    ],
  },
];

export const PLATFORM_LAYERS: PlatformLayer[] = [
  {
    id: "nex-os",
    name: "NEX OS",
    description: "Robot operating layer for task planning, safety policies, and workflow execution.",
    label: "Planned",
    features: ["Task planner", "Safety policy engine", "Workflow runtime", "Device abstraction"],
  },
  {
    id: "nex-fleet",
    name: "NEX Fleet",
    description: "Fleet command dashboard for operators managing multiple robots across sites.",
    label: "Demo",
    features: ["Live status board", "Task queue", "Site map concept", "Operator assignments"],
  },
  {
    id: "nex-cloud",
    name: "NEX Cloud",
    description: "Updates, logs, telemetry, training data pipeline, and remote assist routing.",
    label: "Planned",
    features: ["OTA updates concept", "Log aggregation", "Telemetry pipeline", "Remote assist"],
  },
  {
    id: "nex-skills",
    name: "NEX Skills",
    description: "Task packs and future marketplace for vertical labor workflows.",
    label: "Planned",
    features: ["Vertical task packs", "Workflow templates", "Future marketplace concept"],
  },
  {
    id: "nex-control",
    name: "NEX Control",
    description: "Teleoperation and human-in-the-loop assist for complex or edge-case tasks.",
    label: "Pilot-stage",
    features: ["Remote operator console", "Assist requests", "Supervised takeover"],
  },
  {
    id: "nex-vision",
    name: "NEX Vision",
    description: "Room scanning, object recognition concept, and inspection support.",
    label: "Concept",
    features: ["Room scan concept", "Object ID concept", "Inspection overlays"],
  },
];

export const ARCHITECTURE_STEPS = [
  "User request",
  "NEX OS task planner",
  "Robot or remote expert",
  "Task execution",
  "Photo / log proof",
  "Fleet dashboard",
  "Improvement loop",
];

export const DEMO_ROBOTS = [
  {
    id: "h-01",
    name: "NEX Mini H-01",
    model: "NEX Mini",
    status: "In Task" as RobotStatus,
    battery: 72,
    location: "Floor 2 — Room corridor",
    task: "Room 204 towel delivery",
    autonomy: "Supervised",
    remoteAssist: true,
    lastReport: "2 min ago — en route",
  },
  {
    id: "h-02",
    name: "NEX Mini H-02",
    model: "NEX Mini",
    status: "Ready" as RobotStatus,
    battery: 94,
    location: "Lobby — charging bay",
    task: "—",
    autonomy: "Standby",
    remoteAssist: true,
    lastReport: "8 min ago — idle",
  },
  {
    id: "c-01",
    name: "NEX Build C-01",
    model: "NEX Build",
    status: "Needs Assist" as RobotStatus,
    battery: 41,
    location: "Jobsite A — north wing",
    task: "Jobsite A tool run",
    autonomy: "Remote assist",
    remoteAssist: true,
    lastReport: "1 min ago — assist requested",
  },
  {
    id: "l-01",
    name: "NEX Carry L-01",
    model: "NEX Carry",
    status: "Charging" as RobotStatus,
    battery: 18,
    location: "Warehouse — dock 3",
    task: "—",
    autonomy: "Charging",
    remoteAssist: false,
    lastReport: "22 min ago — charging",
  },
];

export const DEMO_TASKS = [
  { id: "t1", title: "Room 204 towel delivery", site: "Hotel Pilot — Demo", priority: "High" },
  { id: "t2", title: "Suite 118 room scan", site: "Hotel Pilot — Demo", priority: "Medium" },
  { id: "t3", title: "Jobsite A tool run", site: "Construction Pilot — Demo", priority: "High" },
  { id: "t4", title: "Warehouse aisle 7 inventory scan", site: "Logistics Pilot — Demo", priority: "Medium" },
  { id: "t5", title: "Lobby supply restock", site: "Facilities Pilot — Demo", priority: "Low" },
];

export const PILOT_INDUSTRIES = [
  "hospitality",
  "construction",
  "logistics",
  "facilities",
  "retail",
] as const;

export const PILOT_WORKFLOWS = [
  "delivery",
  "inspection",
  "restock",
  "inventory scan",
  "safety walk",
  "room turnover",
] as const;

export const ROBOT_TYPES = ["NEX Mini", "NEX Build", "NEX Carry", "NEX Hotel", "NEX Office"];

export const PROOF_LADDER = [
  { stage: "Idea", status: "complete", note: "Thesis and product architecture defined" },
  { stage: "Website", status: "in-progress", note: "Brand site and narrative (this build)" },
  { stage: "MVP dashboard", status: "demo", note: "Simulated fleet and workflow tools" },
  { stage: "Pilot conversations", status: "planned", note: "Operator outreach not yet proven" },
  { stage: "Hardware prototype", status: "planned", note: "Physical units in development planning" },
  { stage: "Paid pilots", status: "not-proven", note: "Revenue and deployment not yet validated" },
];

export const INVESTOR_MOAT = [
  "Field deployment data",
  "Workflow data",
  "Robot task library",
  "Fleet software",
  "Remote assist network",
  "Hardware iterations",
  "Vertical playbooks",
  "Brand trust",
];

export const SAMPLE_TASK_REPORT = {
  task: "Suite 118 room scan",
  status: "Completed (demo)",
  photos: 4,
  issue: "Minibar restock needed — flagged for staff",
  humanAssist: "Remote operator verified scan quality",
  timestamp: "2026-05-18T14:32:00Z",
  nextAction: "Schedule amenity restock workflow",
};
