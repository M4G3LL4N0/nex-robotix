import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { RoboticsStackDiagram, RobotExplodedView, FleetCommandGraphic } from "@/components/visuals";
import { TECHNOLOGY_LAYERS } from "@/lib/nex-robotics-data";
import { StatusPill } from "@/components/StatusPill";

export const metadata = { title: "Technology" };

export default function TechnologyPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="NEX technology stack"
        subheadline="From robot body to cloud — motion, vision, OS, fleet, skills, and human-in-the-loop control. Status labels reflect concept, planned, demo, or pilot-stage."
        label="Technology"
        primaryHref="/platform"
        primaryLabel="Platform overview"
        secondaryHref="/teleoperation"
        secondaryLabel="Teleoperation"
      />

      <SectionShell title="Technology layers">
        <div className="grid gap-4 sm:grid-cols-2">
          {TECHNOLOGY_LAYERS.map((layer) => (
            <article key={layer.id} id={layer.id} className="nex-glass scroll-mt-24 rounded-lg p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-nex-white">{layer.name}</h3>
                <StatusPill label={layer.label} />
              </div>
              <p className="mt-2 text-sm text-nex-muted">{layer.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell dark title="Architecture visuals">
        <div className="grid gap-6 lg:grid-cols-2">
          <RoboticsStackDiagram />
          <FleetCommandGraphic />
        </div>
        <div className="mt-6">
          <RobotExplodedView />
        </div>
      </SectionShell>

      <CTASection title="See fleet demo" description="Interactive simulated dashboard." primaryHref="/mvp" />
    </>
  );
}
