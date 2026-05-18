import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  title?: string;
  subtitle?: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionShell({
  id,
  title,
  subtitle,
  label,
  children,
  className,
  dark = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-nex-graphite" : "",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(label || title || subtitle) && (
          <div className="mb-10 max-w-2xl">
            {label && (
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-nex-blue">
                {label}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-nex-white md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-nex-muted">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
