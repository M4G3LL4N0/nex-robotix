import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { IndustryUseCaseVisual } from "@/components/visuals";
import { INDUSTRIES } from "@/lib/nex-data";

const industry = INDUSTRIES.find((i) => i.slug === "hospitality")!;

export const metadata = { title: "Hospitality" };

export default function HospitalityPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Hospitality & short-term rentals"
        subheadline={industry.summary}
        label="Industry · Pilot-stage workflows"
        primaryHref="/pilot"
        primaryLabel="Apply for Pilot"
        secondaryHref="/robots/nex-mini"
        secondaryLabel="NEX Mini"
      />
      <SectionShell title="Task workflows" subtitle="Repeatable room and property operations suitable for supervised robot assist.">
        <div className="mb-8 max-w-lg">
          <IndustryUseCaseVisual variant="hospitality" />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {industry.workflows.map((w) => (
            <li key={w} className="nex-glass rounded-lg p-4 text-sm">
              <span className="font-medium text-nex-white">{w}</span>
              <p className="mt-1 text-xs text-nex-muted">Pilot workflow concept — requires site scoping</p>
            </li>
          ))}
        </ul>
      </SectionShell>
      <SectionShell dark title="Operating model">
        <p className="text-nex-muted leading-relaxed">
          Early pilots would combine NEX Mini prototype concepts with NEX Fleet demo tooling and remote assist.
          Guest-facing tasks remain supervised. No claim of fully autonomous hotel operations.
        </p>
      </SectionShell>
      <CTASection title="Hotel or STR operator?" description="Join the pilot network for workflow audit and ROI estimate." primaryHref="/pilot" />
    </>
  );
}
