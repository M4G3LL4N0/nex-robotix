import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { IndustryCard } from "@/components/IndustryCard";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { INDUSTRIES } from "@/lib/nex-data";

export const metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Industry applications"
        subheadline="NEX targets commercial environments where physical workflows repeat daily — with supervised operation and vertical task packs."
        label="Industries"
        primaryHref="/pilot"
        primaryLabel="Join Pilot Network"
        secondaryHref="/mvp"
        secondaryLabel="Workflow Demo"
      />
      <SectionShell title="Use cases by vertical" subtitle="Task workflows are pilot-stage concepts — validated per site during scoping.">
        <div className="grid gap-6 sm:grid-cols-2">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </SectionShell>
      <CTASection
        title="Start with hospitality or construction"
        description="NEX is prioritizing these verticals for early pilot conversations."
        primaryHref="/industries/hospitality"
        primaryLabel="Hospitality"
        secondaryHref="/industries/construction"
        secondaryLabel="Construction"
      />
    </>
  );
}
