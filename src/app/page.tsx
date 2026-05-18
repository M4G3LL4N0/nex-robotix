import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { HeroSection } from "@/components/HeroSection";
import { CommandInterfaceVisual } from "@/components/CommandInterfaceVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { StatusPill } from "@/components/StatusPill";
import { RoboticsStackDiagram, TaskWorkflowDiagram, ProofLadderVisual } from "@/components/visuals";
import { BRAND, ECOSYSTEM, FIRST_MARKETS } from "@/lib/nex-data";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <TrustStrip />
      </div>
      <MarketingGraphicsStack />
      <HeroSection
        headline={BRAND.tagline}
        subheadline="NEX Robotix builds humanoid robotics systems, fleet software, and task intelligence for commercial environments where physical work happens every day."
        primaryLabel="Join Pilot Network"
        primaryHref="/pilot"
        secondaryLabel="View Robot Systems"
        secondaryHref="/robots"
        visual={<CommandInterfaceVisual />}
      />

      <SectionShell
        label="Problem"
        title="AI changed digital work. Physical work did not."
        subtitle="Physical work remains repetitive, expensive, and hard to staff. Hotels, jobsites, warehouses, and facilities still depend on human labor for tasks that repeat every shift."
      />

      <SectionShell
        dark
        label="Solution"
        title="Full-stack robotics for physical labor"
        subtitle="NEX combines robots, operating systems, fleet tools, remote assistance, and vertical task packs — built as one platform, not disconnected hardware."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Humanoid and semi-humanoid robot concepts",
            "NEX OS task planning layer",
            "Fleet command and operator tools",
            "Remote assist and human-in-the-loop",
            "Vertical workflow and skill packs",
            "Pilot deployment and ops playbooks",
          ].map((item) => (
            <li key={item} className="nex-glass rounded-lg p-4 text-sm text-nex-white/90">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell
        label="Product ecosystem"
        title="Robots, software, and workflows"
        subtitle="Early platform components span hardware concepts through fleet operations."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nex-glass group rounded-lg p-5 transition hover:border-nex-blue/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-nex-white group-hover:text-nex-blue">{item.name}</h3>
                <StatusPill label={item.label} />
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell dark label="First markets" title="Where physical work repeats daily">
        <div className="flex flex-wrap gap-2">
          {FIRST_MARKETS.map((m) => (
            <span
              key={m}
              className="rounded-full border border-nex-border bg-nex-gunmetal px-4 py-2 text-sm text-nex-muted"
            >
              {m}
            </span>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        label="Why now"
        title="From research demo to early deployment"
        subtitle="Humanoid robotics is moving toward practical commercial workflows. NEX focuses on repeatable indoor tasks, supervised operation, and vertical playbooks — hospitality and construction first."
      />

      <SectionShell dark label="How it works" title="Request to learning loop">
        <div className="grid gap-6 lg:grid-cols-2">
          <RoboticsStackDiagram />
          <TaskWorkflowDiagram />
        </div>
      </SectionShell>

      <SectionShell label="Maturity" title="Honest proof ladder">
        <ProofLadderVisual />
      </SectionShell>

      <CTASection
        title="Join the NEX pilot network"
        description="For operators, property managers, construction teams, hotels, and facilities teams exploring robotics-assisted physical work. Pilot-stage — scoping required."
        primaryHref="/pilot"
        primaryLabel="Apply for Pilot"
        secondaryHref="/mvp"
        secondaryLabel="Explore MVP Demo"
      />
    </>
  );
}
