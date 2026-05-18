import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { StatusPill } from "@/components/StatusPill";
import {
  RobotSilhouette,
  RobotBlueprintDiagram,
  RobotExplodedView,
  TaskWorkflowDiagram,
  IndustryUseCaseVisual,
} from "@/components/visuals";
import { ROBOTS } from "@/lib/nex-data";
import { ROBOT_PAGE_DETAILS, type IndustryVisualVariant } from "@/lib/nex-robotics-data";
import { notFound } from "next/navigation";

const INDUSTRY_MAP: Record<string, IndustryVisualVariant> = {
  "nex-mini": "hospitality",
  "nex-hotel": "hospitality",
  "nex-build": "construction",
  "nex-carry": "warehouse",
  "nex-retail": "retail",
  "nex-office": "office",
  "nex-assist": "healthcare",
  "nex-guard": "office",
  "nex-one": "industrial",
};

export function RobotProductPage({ slug }: { slug: string }) {
  const robot = ROBOTS.find((r) => r.slug === slug);
  const detail = ROBOT_PAGE_DETAILS[slug];
  if (!robot || !detail) notFound();

  const industryVariant = INDUSTRY_MAP[slug] ?? "industrial";

  return (
    <>
      <HeroSection
        headline={robot.name}
        subheadline={robot.description}
        label={`${robot.label} · ${robot.tagline}`}
        primaryHref="/pilot"
        primaryLabel="Pilot Inquiry"
        secondaryHref="/mvp"
        secondaryLabel="Fleet Demo"
        visual={<RobotSilhouette variant={detail.visualVariant} label={robot.label} compact />}
      />

      <SectionShell title="Product visual" subtitle="Concept render — not production hardware photography.">
        <div className="grid gap-6 lg:grid-cols-2">
          <RobotSilhouette variant={detail.visualVariant} label={robot.label} />
          <RobotBlueprintDiagram label={robot.label} />
        </div>
      </SectionShell>

      <SectionShell dark title="Specifications" subtitle="Planned targets — subject to pilot scoping.">
        <dl className="grid gap-3 sm:grid-cols-2">
          {detail.specs.map((s) => (
            <div key={s.label} className="nex-glass rounded-lg p-4">
              <dt className="text-xs uppercase tracking-wider text-nex-muted">{s.label}</dt>
              <dd className="mt-1 font-mono text-sm text-nex-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </SectionShell>

      <SectionShell title="Capabilities & workflows">
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="space-y-2">
            {robot.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2 text-sm text-nex-white/90">
                <StatusPill label="Planned" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase text-nex-cyan">Workflows</h3>
            <ul className="flex flex-wrap gap-2">
              {detail.workflows.map((w) => (
                <li key={w} className="rounded-full border border-nex-border px-3 py-1 text-xs text-nex-muted">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell dark title="Demo states" subtitle="Simulated states for MVP dashboard — not live telemetry.">
        <div className="flex flex-wrap gap-2">
          {detail.demoStates.map((state) => (
            <span key={state} className="rounded border border-nex-border bg-nex-gunmetal px-3 py-1.5 font-mono text-xs text-nex-muted">
              {state}
            </span>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Pilot use cases">
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="space-y-2">
            {detail.pilotUseCases.map((u) => (
              <li key={u} className="nex-glass rounded-lg p-3 text-sm text-nex-white/90">
                {u}
              </li>
            ))}
          </ul>
          <IndustryUseCaseVisual variant={industryVariant} />
        </div>
      </SectionShell>

      {detail.safetyNotes && detail.safetyNotes.length > 0 && (
        <SectionShell dark title="Safety & compliance notes">
          <ul className="space-y-2 text-sm text-nex-amber">
            {detail.safetyNotes.map((note) => (
              <li key={note}>⚠ {note}</li>
            ))}
          </ul>
        </SectionShell>
      )}

      <SectionShell title="Platform integration">
        <div className="grid gap-6 lg:grid-cols-2">
          <RobotExplodedView label={robot.label} />
          <TaskWorkflowDiagram />
        </div>
        <p className="mt-6 text-center text-sm text-nex-muted">
          <Link href="/technology" className="text-nex-blue hover:underline">
            Explore NEX technology stack →
          </Link>
        </p>
      </SectionShell>

      <CTASection
        title={`Scope a ${robot.name} pilot`}
        description="Workflow audit and ROI estimate — pilot-stage, not guaranteed deployment."
        primaryHref="/pilot"
        secondaryHref="/use-cases"
        secondaryLabel="All use cases"
      />
    </>
  );
}
