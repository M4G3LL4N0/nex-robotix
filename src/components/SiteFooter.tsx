import Link from "next/link";
import { NexLogo } from "@/components/NexLogo";
import { BRAND } from "@/lib/nex-data";

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "/robots", label: "Robot Systems" },
      { href: "/robotics", label: "Robotics" },
      { href: "/technology", label: "Technology" },
      { href: "/platform", label: "Platform" },
      { href: "/use-cases", label: "Use Cases" },
      { href: "/mvp", label: "MVP Demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/research", label: "Research" },
      { href: "/safety", label: "Safety" },
      { href: "/investors", label: "Investors" },
      { href: "/pilot", label: "Pilot Program" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries/hospitality", label: "Hospitality" },
      { href: "/industries/construction", label: "Construction" },
      { href: "/industries", label: "All Industries" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-nex-border bg-nex-graphite">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <NexLogo />
            <p className="mt-4 text-sm text-nex-muted">{BRAND.tagline}</p>
            <p className="mt-2 text-xs text-nex-muted">
              Concept and prototype systems. Demo data where labeled.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-nex-muted">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-nex-white/80 transition hover:text-nex-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-nex-border pt-8 text-xs text-nex-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Simulated metrics are labeled Demo. Not production telemetry.</span>
        </div>
      </div>
    </footer>
  );
}
