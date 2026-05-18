import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import {
  RobotSilhouette,
  RobotBlueprintDiagram,
  RobotExplodedView,
  FleetCommandGraphic,
  TaskWorkflowDiagram,
  RoboticsStackDiagram,
  PilotReadinessGraphic,
  ProofLadderVisual,
  IndustryUseCaseVisual,
  RobotCardVisual,
} from "@/components/visuals";
import { VISUAL_SYSTEM_CATALOG } from "@/lib/nex-robotics-data";

export const metadata = { title: "Visual System" };

export default function VisualSystemPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="NEX visual language"
        subheadline="Premium dark robotics UI — schematics, silhouettes, command mockups, and industry scenes. All product imagery is concept or demo unless labeled otherwise."
        label="Design system"
        primaryHref="/robotics"
        primaryLabel="Robotics overview"
        secondaryHref="/mvp"
        secondaryLabel="MVP demo"
      />
      <SectionShell title="Component catalog">
        <ul className="mb-8 grid gap-2 sm:grid-cols-2">
          {VISUAL_SYSTEM_CATALOG.map((v) => (
            <li key={v.name} className="text-sm text-nex-muted">
              <span className="font-mono text-nex-cyan">{v.name}</span> — {v.purpose}
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell dark title="Robot silhouettes">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RobotSilhouette variant="humanoid-full" label="Concept" compact />
          <RobotSilhouette variant="wheeled-semi" label="Prototype" compact />
          <RobotSilhouette variant="industrial-cart" label="Concept" compact />
        </div>
      </SectionShell>
      <SectionShell title="Diagrams">
        <div className="grid gap-6 lg:grid-cols-2">
          <RobotBlueprintDiagram />
          <RobotExplodedView />
          <TaskWorkflowDiagram />
          <RoboticsStackDiagram />
        </div>
      </SectionShell>
      <SectionShell dark title="Command & fleet">
        <FleetCommandGraphic />
      </SectionShell>
      <SectionShell title="Industry scenes">
        <div className="grid gap-4 sm:grid-cols-2">
          <IndustryUseCaseVisual variant="hospitality" />
          <IndustryUseCaseVisual variant="construction" />
          <IndustryUseCaseVisual variant="warehouse" />
          <IndustryUseCaseVisual variant="retail" />
        </div>
      </SectionShell>
      <SectionShell title="Scoring & proof">
        <div className="grid gap-6 lg:grid-cols-2">
          <PilotReadinessGraphic />
          <ProofLadderVisual />
        </div>
      </SectionShell>
      <SectionShell dark title="Card visuals">
        <div className="grid gap-4 sm:grid-cols-3">
          <RobotCardVisual variant="wheeled-semi" />
          <RobotCardVisual variant="industrial-cart" />
          <RobotCardVisual variant="humanoid-full" />
        </div>
      </SectionShell>
      <CTASection title="Use visuals across the site" description="Consistent NEX robotics brand." primaryHref="/" primaryLabel="Home" />
    </>
  );
}
