import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { FleetDashboard } from "@/components/mvp/FleetDashboard";
import { SectionShell } from "@/components/SectionShell";

export const metadata = { title: "MVP Demo Dashboard" };

export default function MvpPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="MVP operations dashboard"
        subheadline="Interactive demo of NEX Fleet concepts — fleet overview, task queue, pilot workflow builder, ROI estimator, and readiness scoring. All data is simulated."
        label="Demo · Simulated data"
        primaryHref="/pilot"
        primaryLabel="Apply for Pilot"
        secondaryHref="/platform"
        secondaryLabel="Platform Overview"
        visual={undefined}
      />
      <SectionShell>
        <FleetDashboard />
      </SectionShell>
    </>
  );
}
