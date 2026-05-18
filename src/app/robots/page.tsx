import { HeroSection } from "@/components/HeroSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import { RobotCard } from "@/components/RobotCard";
import { SectionShell } from "@/components/SectionShell";
import { CTASection } from "@/components/CTASection";
import { RobotExplodedView } from "@/components/visuals";
import { ROBOTS } from "@/lib/nex-data";

export const metadata = {
  title: "Robot Systems",
};

export default function RobotsPage() {
  return (
    <>
      <SubpageVisual variant="default" />

      <HeroSection
        headline="Robot product family"
        subheadline="NEX builds a family of labor-focused robot concepts — from first commercial prototype to flagship humanoid platform. All hardware statuses are labeled honestly."
        label="Product"
        primaryHref="/robots/nex-mini"
        primaryLabel="NEX Mini Prototype"
        secondaryHref="/platform"
        secondaryLabel="NEX Platform"
      />
      <SectionShell title="Systems in development" subtitle="Concept and prototype systems — not production deployments.">
        <div className="mb-8">
          <RobotExplodedView />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROBOTS.map((robot) => (
            <RobotCard key={robot.slug} robot={robot} />
          ))}
        </div>
      </SectionShell>
      <CTASection
        title="Explore pilot fit for your site"
        description="Match robot concepts to your workflows with a pilot scoping conversation."
        primaryHref="/pilot"
      />
    </>
  );
}
