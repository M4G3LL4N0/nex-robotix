import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { TaskWorkflowDiagram, IndustryUseCaseVisual } from "@/components/visuals";
import { USE_CASES } from "@/lib/nex-robotics-data";
import type { IndustryVisualVariant } from "@/lib/nex-robotics-data";

const USE_CASE_VISUAL: Record<string, IndustryVisualVariant> = {
  delivery: "hospitality",
  inspection: "office",
  scanning: "warehouse",
  restocking: "retail",
  "room-turnover": "hospitality",
  "tool-run": "construction",
  "material-move": "warehouse",
  "safety-walk": "office",
  "supply-delivery": "healthcare",
  "inventory-audit": "warehouse",
};

export const metadata = { title: "Use Cases" };

export default function UseCasesPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Commercial workflow library"
        subheadline="Task patterns NEX is designing skill packs for — pilot-stage concepts validated per site."
        label="Use cases"
        primaryHref="/pilot"
        primaryLabel="Pilot inquiry"
        secondaryHref="/mvp"
        secondaryLabel="Workflow demo"
      />
      <SectionShell title="Workflow catalog">
        <div className="grid gap-6 md:grid-cols-2">
          {USE_CASES.map((uc) => (
            <article key={uc.id} className="nex-glass overflow-hidden rounded-lg">
              <IndustryUseCaseVisual variant={USE_CASE_VISUAL[uc.id] ?? "industrial"} title={uc.name} />
              <div className="p-4">
                <h3 className="font-semibold text-nex-white">{uc.name}</h3>
                <p className="mt-1 text-sm text-nex-muted">{uc.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
      <SectionShell dark title="Execution loop">
        <TaskWorkflowDiagram />
      </SectionShell>
      <CTASection
        title="Map workflows to your site"
        description="Hospitality and construction prioritized for early pilots."
        primaryHref="/industries"
        primaryLabel="Industries"
      />
    </>
  );
}
