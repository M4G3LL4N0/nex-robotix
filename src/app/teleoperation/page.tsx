import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { FleetCommandGraphic, TaskWorkflowDiagram } from "@/components/visuals";
import { TELEOPERATION_FEATURES } from "@/lib/nex-robotics-data";

export const metadata = { title: "Teleoperation" };

export default function TeleoperationPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Human-in-the-loop supervision"
        subheadline="NEX Control enables remote operators to assist robots when tasks exceed supervised autonomy — pilot-stage concept, not claimed as production teleop infrastructure."
        label="Pilot-stage"
        primaryHref="/mvp"
        primaryLabel="Fleet Demo"
        secondaryHref="/safety"
        secondaryLabel="Safety model"
      />
      <SectionShell title="NEX Control capabilities">
        <ul className="grid gap-3 sm:grid-cols-2">
          {TELEOPERATION_FEATURES.map((f) => (
            <li key={f} className="nex-glass rounded-lg p-4 text-sm text-nex-white/90">
              {f}
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell dark title="Assist workflow">
        <div className="grid gap-6 lg:grid-cols-2">
          <TaskWorkflowDiagram />
          <FleetCommandGraphic />
        </div>
      </SectionShell>
      <CTASection title="Pilot with supervised assist" description="Early deployments assume human oversight." primaryHref="/pilot" />
    </>
  );
}
