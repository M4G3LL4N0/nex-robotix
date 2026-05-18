import Link from "next/link";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  label?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  visual?: React.ReactNode;
}

export function HeroSection({
  headline,
  subheadline,
  label,
  primaryHref = "/pilot",
  primaryLabel = "Join Pilot Network",
  secondaryHref = "/robots",
  secondaryLabel = "View Robot Systems",
  visual,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-nex-border nex-grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-nex-blue/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {label && (
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-nex-cyan">{label}</p>
            )}
            <h1 className="text-4xl font-semibold tracking-tight text-nex-white sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-nex-muted">{subheadline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="rounded-md bg-nex-blue px-6 py-3 text-sm font-medium text-white transition hover:bg-nex-blue/90"
              >
                {primaryLabel}
              </Link>
              {secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="rounded-md border border-nex-border px-6 py-3 text-sm font-medium text-nex-white transition hover:border-nex-blue/50"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
          {visual && <div className="relative">{visual}</div>}
        </div>
      </div>
    </section>
  );
}
