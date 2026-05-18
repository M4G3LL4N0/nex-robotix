"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NexLogo } from "@/components/NexLogo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/robots", label: "Robots" },
  { href: "/robotics", label: "Robotics" },
  { href: "/technology", label: "Technology" },
  { href: "/platform", label: "Platform" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/industries", label: "Industries" },
  { href: "/mvp", label: "MVP Demo" },
  { href: "/pilot", label: "Pilot" },
];

const moreNav = [
  { href: "/safety", label: "Safety" },
  { href: "/teleoperation", label: "Teleoperation" },
  { href: "/research", label: "Research" },
  { href: "/visual-system", label: "Visual System" },
  { href: "/investors", label: "Investors" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="sticky top-0 z-50 border-b border-nex-border/80 bg-nex-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NexLogo />
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-sm transition",
                isActive(item.href) ? "bg-nex-gunmetal text-nex-white" : "text-nex-muted hover:text-nex-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative ml-1">
            <button
              type="button"
              className="rounded-md px-2.5 py-2 text-sm text-nex-muted hover:text-nex-white"
              aria-haspopup="true"
            >
              More
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-1 min-w-[160px] rounded-lg border border-nex-border bg-nex-graphite py-1 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {moreNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-nex-muted hover:bg-nex-gunmetal hover:text-nex-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="text-sm text-nex-muted transition hover:text-nex-white">
            Contact
          </Link>
          <Link
            href="/pilot"
            className="rounded-md bg-nex-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-nex-blue/90"
          >
            Join Pilot
          </Link>
        </div>
        <button
          type="button"
          className="rounded-md border border-nex-border p-2 text-nex-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="max-h-[70vh] overflow-y-auto border-t border-nex-border px-4 py-4 lg:hidden">
          {[...nav, ...moreNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-nex-muted hover:bg-nex-gunmetal hover:text-nex-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md px-3 py-2 text-sm text-nex-muted">
            Contact
          </Link>
          <Link
            href="/pilot"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-md bg-nex-blue px-3 py-2 text-center text-sm font-medium text-white"
          >
            Join Pilot
          </Link>
        </nav>
      )}
    </header>
  );
}
