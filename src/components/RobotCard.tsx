import Link from "next/link";
import { StatusPill } from "@/components/StatusPill";
import { RobotCardVisual } from "@/components/visuals/RobotCardVisual";
import type { RobotModel } from "@/lib/nex-data";
import { ROBOT_PAGE_DETAILS } from "@/lib/nex-robotics-data";

export function RobotCard({ robot }: { robot: RobotModel }) {
  const detail = ROBOT_PAGE_DETAILS[robot.slug];
  const variant = detail?.visualVariant ?? "wheeled-semi";

  return (
    <Link
      href={robot.href}
      className="group nex-glass nex-glow flex flex-col rounded-lg overflow-hidden transition hover:border-nex-blue/40"
    >
      <RobotCardVisual variant={variant} className="rounded-none border-0 border-b border-nex-border" />
      <div className="flex flex-col p-6 flex-1">
        <div className="mb-4 flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-nex-white transition group-hover:text-nex-blue">
              {robot.name}
            </h3>
            <p className="mt-1 text-sm text-nex-muted">{robot.tagline}</p>
          </div>
          <StatusPill label={robot.label} />
        </div>
        <p className="flex-1 text-sm leading-relaxed text-nex-muted">{robot.description}</p>
        <ul className="mt-4 space-y-1 border-t border-nex-border pt-4">
          {robot.capabilities.slice(0, 3).map((cap) => (
            <li key={cap} className="text-xs text-nex-muted before:mr-2 before:text-nex-blue before:content-['→']">
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
