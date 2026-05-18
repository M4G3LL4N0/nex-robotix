import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { PilotReadinessGraphic } from "@/components/visuals";
import { SAFETY_PRINCIPLES } from "@/lib/nex-robotics-data";

export const metadata = { title: "Safety" };

export default function SafetyPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Safety, consent, and supervised operation"
        subheadline="NEX does not claim safety certification, clinical approval, or autonomous operation without human oversight. Pilots require site-specific safety and privacy review."
        label="Policy"
        primaryHref="/pilot"
        primaryLabel="Pilot program"
        secondaryHref="/robots/nex-assist"
        secondaryLabel="Healthcare concept"
      />
      <SectionShell title="Operating principles">
        <ul className="space-y-3">
          {SAFETY_PRINCIPLES.map((p) => (
            <li key={p} className="nex-glass rounded-lg p-4 text-sm text-nex-white/90">
              {p}
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell dark title="Privacy & consent">
        <p className="max-w-3xl text-nex-muted leading-relaxed">
          Guest-facing hotels, STR properties, and healthcare-adjacent facilities require explicit consent
          workflows and data handling review before any pilot. NEX Assist is not a medical device and is not
          claimed as HIPAA-certified without documented review.
        </p>
      </SectionShell>
      <SectionShell title="Pilot readiness factors">
        <PilotReadinessGraphic />
      </SectionShell>
      <CTASection title="Safety review in every pilot scope" description="No deployment plan without operator sign-off." primaryHref="/contact" />
    </>
  );
}
