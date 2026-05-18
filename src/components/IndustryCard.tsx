import Link from "next/link";
import type { Industry } from "@/lib/nex-data";

export function IndustryCard({ industry }: { industry: Industry }) {
  const content = (
    <>
      <h3 className="text-lg font-semibold text-nex-white">{industry.name}</h3>
      <p className="mt-2 text-sm text-nex-muted">{industry.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {industry.workflows.slice(0, 4).map((w) => (
          <li
            key={w}
            className="rounded-full border border-nex-border bg-nex-gunmetal px-2.5 py-0.5 text-xs text-nex-muted"
          >
            {w}
          </li>
        ))}
        {industry.workflows.length > 4 && (
          <li className="px-2 py-0.5 text-xs text-nex-blue">+{industry.workflows.length - 4} more</li>
        )}
      </ul>
    </>
  );

  const className = "nex-glass block rounded-lg p-6 transition hover:border-nex-blue/40";

  if (industry.href) {
    return (
      <Link href={industry.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
