import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { PilotForm } from "./PilotForm";

export const metadata = { title: "Pilot Program" };

const PILOT_INCLUDES = [
  "Workflow audit",
  "NEX OS demo setup",
  "Robot deployment plan",
  "ROI estimate",
  "Safety review",
  "Task automation roadmap",
];

const PILOT_FOR = [
  "Hotels",
  "Property managers",
  "Construction companies",
  "Warehouses",
  "Facility teams",
  "Retail operators",
];

export default function PilotPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="NEX Pilot Program"
        subheadline="For operators exploring robotics-assisted physical work. Pilot-stage program — scoping and safety review required before any deployment plan."
        label="Pilot-stage"
        primaryHref="#apply"
        primaryLabel="Apply Below"
        secondaryHref="/mvp"
        secondaryLabel="MVP Demo"
      />
      <SectionShell title="Who it's for">
        <div className="flex flex-wrap gap-2">
          {PILOT_FOR.map((item) => (
            <span key={item} className="rounded-full border border-nex-border px-4 py-2 text-sm text-nex-muted">
              {item}
            </span>
          ))}
        </div>
      </SectionShell>
      <SectionShell dark title="Pilot includes" subtitle="Planned pilot deliverables — not guaranteed until scoped per site.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {PILOT_INCLUDES.map((item) => (
            <li key={item} className="nex-glass rounded-lg p-4 text-sm text-nex-white/90">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell id="apply" title="Apply for pilot">
        <PilotForm />
      </SectionShell>
    </>
  );
}
