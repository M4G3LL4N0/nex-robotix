import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { InvestorProofLadder } from "@/components/InvestorProofLadder";
import { ProofLadderVisual } from "@/components/visuals";
import { CTASection } from "@/components/CTASection";
import { INVESTOR_MOAT } from "@/lib/nex-data";

export const metadata = { title: "Investors" };

export default function InvestorsPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Physical intelligence for the AI age"
        subheadline="NEX Robotix is building the full-stack robotics company for commercial physical labor — humanoid systems, OS, fleet software, and vertical workflows."
        label="Investor narrative"
        primaryHref="/contact"
        primaryLabel="Investor Inquiry"
        secondaryHref="/mvp"
        secondaryLabel="MVP Demo"
      />

      <SectionShell label="Thesis" title="AI is leaving the screen and entering the physical world">
        <p className="max-w-3xl text-nex-muted leading-relaxed">
          Digital work is being automated. Physical work — cleaning rooms, moving materials, scanning shelves,
          walking jobsites — remains labor-intensive. NEX targets this gap with a robotics operating model built
          for repeatable commercial workflows.
        </p>
      </SectionShell>

      <SectionShell dark label="Problem" title="Physical labor is hard to scale">
        <p className="max-w-3xl text-nex-muted leading-relaxed">
          It is expensive, repetitive, hard to staff, and hard to coordinate across sites. Operators lack
          unified tools to deploy, supervise, and improve physical task execution.
        </p>
      </SectionShell>

      <SectionShell label="Solution" title="Full-stack robotics company">
        <p className="max-w-3xl text-nex-muted leading-relaxed">
          NEX builds robots, OS, fleet software, task packs, and remote assist infrastructure — designed as one
          platform rather than disconnected hardware SKUs.
        </p>
      </SectionShell>

      <SectionShell dark label="Wedge" title="Commercial environments with daily repeat workflows">
        <p className="text-nex-muted">Hospitality and construction first — then logistics, facilities, healthcare support, retail, offices, and home.</p>
      </SectionShell>

      <SectionShell label="Moat" title="Compounding field and software advantages">
        <ul className="grid gap-2 sm:grid-cols-2">
          {INVESTOR_MOAT.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-nex-white/90">
              <span className="text-nex-blue">→</span> {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell dark label="Proof ladder" title="Current status (honest)">
        <div className="grid gap-8 lg:grid-cols-2">
          <ProofLadderVisual />
          <InvestorProofLadder />
        </div>
      </SectionShell>

      <CTASection
        title="Investor or pilot partner inquiry"
        description="Connect on the physical AI roadmap. No revenue or deployment claims implied."
        primaryHref="/contact"
        primaryLabel="Contact"
        secondaryHref="/pilot"
        secondaryLabel="Pilot Program"
      />
    </>
  );
}
