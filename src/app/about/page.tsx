import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { BRAND } from "@/lib/nex-data";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <SubpageVisual variant="about" />

      <HeroSection
        headline={`About ${BRAND.name}`}
        subheadline="We are building humanoid robotics systems for real-world physical labor — robots, operating systems, fleet software, and vertical workflows as one company."
        label="Vision"
        primaryHref="/investors"
        primaryLabel="Company Thesis"
        secondaryHref="/pilot"
        secondaryLabel="Pilot Program"
      />
      <SectionShell title="What we believe">
        <div className="space-y-6 max-w-3xl text-nex-muted leading-relaxed">
          <p>
            AI is automating digital work. Physical work — the tasks that happen in hotels, on jobsites, in
            warehouses, and across facilities — is the next frontier. NEX exists to build the physical
            workforce layer for the AI age.
          </p>
          <p>
            We are not positioning as a hardware-only robot vendor. NEX is a full-stack robotics company:
            humanoid and semi-humanoid systems, robot operating software, fleet command, teleoperation,
            vertical skill packs, and pilot deployment tooling.
          </p>
          <p className="text-sm text-nex-amber">
            We do not claim production robots, paying customers, or validated deployments unless explicitly
            labeled and proven. This site reflects concept, prototype, and pilot-stage planning.
          </p>
        </div>
      </SectionShell>
      <SectionShell dark title="How we work">
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            "Start with repeatable commercial workflows",
            "Supervised operation and remote assist first",
            "Build vertical playbooks per industry",
            "Validate with pilot data before scaling claims",
          ].map((item) => (
            <li key={item} className="nex-glass rounded-lg p-4 text-sm">{item}</li>
          ))}
        </ul>
      </SectionShell>
      <CTASection title="Build the physical layer with us" description="Operators and partners welcome." primaryHref="/contact" />
    </>
  );
}
