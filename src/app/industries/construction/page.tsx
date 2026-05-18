import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { IndustryUseCaseVisual } from "@/components/visuals";
import { INDUSTRIES } from "@/lib/nex-data";

const industry = INDUSTRIES.find((i) => i.slug === "construction")!;

export const metadata = { title: "Construction" };

export default function ConstructionPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Construction site robotics"
        subheadline={industry.summary}
        label="Industry · Pilot-stage workflows"
        primaryHref="/pilot"
        primaryLabel="Apply for Pilot"
        secondaryHref="/robots/nex-build"
        secondaryLabel="NEX Build"
      />
      <SectionShell title="Jobsite task workflows">
        <div className="mb-8 max-w-lg">
          <IndustryUseCaseVisual variant="construction" />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {industry.workflows.map((w) => (
            <li key={w} className="nex-glass rounded-lg p-4 text-sm text-nex-white/90">
              {w}
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell dark title="Safety note">
        <p className="text-nex-muted leading-relaxed">
          Construction environments require site-specific safety review. NEX does not claim certification,
          autonomy in active zones, or replacement of trained safety personnel. All jobsite deployments
          would be pilot-stage with human supervision.
        </p>
      </SectionShell>
      <CTASection title="General contractor or site operator?" description="Scope tool runs, documentation, and safety walks for pilot fit." primaryHref="/pilot" />
    </>
  );
}
