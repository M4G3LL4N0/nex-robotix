import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { PlatformLayerCard } from "@/components/PlatformLayerCard";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { RoboticsStackDiagram, RobotExplodedView, FleetCommandGraphic, TaskWorkflowDiagram } from "@/components/visuals";
import { ARCHITECTURE_STEPS, PLATFORM_LAYERS } from "@/lib/nex-data";

export const metadata = { title: "Platform" };

export default function PlatformPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="NEX Platform"
        subheadline="Operating layer, fleet command, cloud infrastructure, skills marketplace concept, teleoperation, and vision systems — built as one robotics stack."
        label="Platform"
        primaryHref="/mvp"
        primaryLabel="MVP Demo Dashboard"
        secondaryHref="/pilot"
        secondaryLabel="Pilot Program"
      />
      <SectionShell title="Platform layers" subtitle="Early platform components — labels indicate concept, planned, demo, or pilot-stage status.">
        <div className="grid gap-6">
          {PLATFORM_LAYERS.map((layer) => (
            <PlatformLayerCard key={layer.id} layer={layer} />
          ))}
        </div>
      </SectionShell>
      <SectionShell title="Platform visuals">
        <div className="grid gap-6 lg:grid-cols-2">
          <RoboticsStackDiagram />
          <RobotExplodedView />
          <FleetCommandGraphic />
          <TaskWorkflowDiagram />
        </div>
      </SectionShell>
      <SectionShell dark label="Architecture" title="Request to improvement loop">
        <div className="flex flex-col items-center gap-2">
          {ARCHITECTURE_STEPS.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className="nex-glass w-full max-w-md rounded-lg px-6 py-3 text-center text-sm font-medium text-nex-white">
                {step}
              </div>
              {i < ARCHITECTURE_STEPS.length - 1 && (
                <div className="font-mono text-lg text-nex-blue">↓</div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-nex-muted">Conceptual architecture — planned system</p>
      </SectionShell>
      <CTASection
        title="See the fleet demo"
        description="Explore simulated fleet operations in the MVP dashboard."
        primaryHref="/mvp"
      />
    </>
  );
}
