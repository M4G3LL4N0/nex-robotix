import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { ProofLadderVisual, RobotBlueprintDiagram } from "@/components/visuals";
import { InvestorProofLadder } from "@/components/InvestorProofLadder";

export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Robotics roadmap & physical AI thesis"
        subheadline="NEX research direction: practical commercial workflows first, supervised operation, field data for skill packs — honest about current stage."
        label="Research"
        primaryHref="/investors"
        primaryLabel="Investor narrative"
        secondaryHref="/robotics"
        secondaryLabel="Robotics overview"
      />
      <SectionShell title="Physical AI thesis">
        <p className="max-w-3xl text-nex-muted leading-relaxed">
          We believe the next layer of AI value is physical: repeatable labor in commercial buildings. Research
          priorities include indoor navigation under supervision, workflow capture for NEX Skills, and remote
          assist interfaces — not general-purpose autonomy claims.
        </p>
      </SectionShell>
      <SectionShell dark title="Extended proof ladder">
        <ProofLadderVisual />
      </SectionShell>
      <SectionShell title="Company proof ladder (site)">
        <InvestorProofLadder />
      </SectionShell>
      <SectionShell dark title="Hardware R&D direction">
        <div className="grid gap-6 lg:grid-cols-2">
          <RobotBlueprintDiagram label="Prototype" />
          <ul className="space-y-2 text-sm text-nex-muted">
            <li>→ NEX Mini prototype planning</li>
            <li>→ Sensor and compute architecture concepts</li>
            <li>→ Simulation and demo environments</li>
            <li>→ No production units claimed</li>
          </ul>
        </div>
      </SectionShell>
      <CTASection title="Partner on the roadmap" description="Investors and pilot operators welcome." primaryHref="/contact" />
    </>
  );
}
