"use client";

import { RobotSilhouette } from "@/components/visuals/RobotSilhouette";
import { ROBOT_PAGE_DETAILS, type RobotVisualVariant } from "@/lib/nex-robotics-data";

const MODEL_VARIANT: Record<string, RobotVisualVariant> = {
  "NEX Mini": "wheeled-semi",
  "NEX Build": "industrial-cart",
  "NEX Carry": "industrial-cart",
  "NEX Hotel": "wheeled-semi",
};

export function SelectedRobotVisual({ model }: { model: string }) {
  const slug = Object.entries(ROBOT_PAGE_DETAILS).find(([, d]) =>
    model.toLowerCase().includes(d.slug.replace("nex-", "")),
  )?.[0];
  const variant =
    (slug && ROBOT_PAGE_DETAILS[slug]?.visualVariant) ||
    MODEL_VARIANT[model] ||
    "wheeled-semi";

  return <RobotSilhouette variant={variant} label="Demo" compact />;
}
