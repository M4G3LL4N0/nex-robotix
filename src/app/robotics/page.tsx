import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { HeroSection } from "@/components/HeroSection";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import {
  RoboticsStackDiagram,
  TaskWorkflowDiagram,
  RobotExplodedView,
  ProofLadderVisual,
} from "@/components/visuals";
import { ROBOTICS_TOPICS } from "@/lib/nex-robotics-data";

export const metadata = { title: "Robotics" };

export default function RoboticsPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Physical AI for commercial work"
        subheadline="NEX builds humanoid and semi-humanoid systems, fleet software, teleoperation, and vertical workflows — focused on repeatable physical labor in commercial environments."
        label="Robotics thesis"
        primaryHref="/technology"
        primaryLabel="NEX Technology"
        secondaryHref="/research"
        secondaryLabel="Research & roadmap"
      />

      <SectionShell id="physical-ai" label="Physical AI" title="Intelligence that moves through the world">
        <p className="max-w-3xl text-nex-muted leading-relaxed">
          Physical AI connects perception, planning, and actuation for tasks that happen in hotels, jobsites,
          warehouses, and facilities. NEX treats software and hardware as one stack — not a robot SKU with
          disconnected apps.
        </p>
      </SectionShell>

      <SectionShell dark id="humanoid" label="Humanoids" title="Humanoid and wheeled-humanoid platforms">
        <div className="grid gap-6 lg:grid-cols-2">
          <p className="text-nex-muted leading-relaxed">
            NEX Mini is the first commercial prototype direction — wheeled semi-humanoid for indoor workflows.
            NEX One is the long-term full humanoid concept. Neither is claimed as production-deployed today.
          </p>
          <Link href="/robots" className="text-nex-blue text-sm hover:underline">
            View robot systems →
          </Link>
        </div>
      </SectionShell>

      <SectionShell id="manipulation" label="Manipulation" title="Mobile manipulation for labor tasks">
        <p className="max-w-3xl text-nex-muted">
          Delivery, scanning, restocking, and tool runs require safe movement plus supervised manipulation.
          Early pilots emphasize remote assist and checklist workflows over fully autonomous manipulation claims.
        </p>
      </SectionShell>

      <SectionShell title="Robotics topics">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ROBOTICS_TOPICS.map((t) => (
            <li key={t.title}>
              <Link href={t.href} className="nex-glass block rounded-lg p-3 text-sm text-nex-white/90 hover:border-nex-blue/40">
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell dark title="Stack & workflow">
        <div className="grid gap-6 lg:grid-cols-2">
          <RoboticsStackDiagram />
          <TaskWorkflowDiagram />
        </div>
        <div className="mt-6">
          <RobotExplodedView />
        </div>
      </SectionShell>

      <SectionShell title="Honest maturity">
        <ProofLadderVisual />
      </SectionShell>

      <CTASection title="Explore the MVP demo" description="Simulated fleet command and pilot tools." primaryHref="/mvp" />
    </>
  );
}
