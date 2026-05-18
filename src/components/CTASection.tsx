import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryHref = "/pilot",
  primaryLabel = "Join Pilot Network",
  secondaryHref,
  secondaryLabel,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("border-t border-nex-border bg-nex-graphite py-16 md:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-nex-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-nex-muted">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="rounded-md bg-nex-blue px-6 py-3 text-sm font-medium text-white transition hover:bg-nex-blue/90"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="rounded-md border border-nex-border px-6 py-3 text-sm font-medium text-nex-white transition hover:border-nex-blue/50"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
