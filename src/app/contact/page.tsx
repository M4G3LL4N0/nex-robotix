"use client";

import { useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";
import { HeroSection } from "@/components/HeroSection";
import { SectionShell } from "@/components/SectionShell";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    localStorage.setItem("nex-contact-demo", JSON.stringify({ ...data, savedAt: new Date().toISOString() }));
    setSent(true);
  }

  const inputClass =
    "mt-1 w-full rounded border border-nex-border bg-nex-black px-3 py-2 text-sm text-nex-white focus:border-nex-blue focus:outline-none";

  return (
    <>
      <SubpageVisual variant="contact" />

      <HeroSection
        headline="Contact"
        subheadline="Enterprise inquiry, pilot interest, investor conversations, and partnership discussions."
        label="Get in touch"
        primaryHref="#form"
        primaryLabel="Send Message"
        secondaryHref="/pilot"
        secondaryLabel="Pilot Program"
      />
      <SectionShell id="form" title="Enterprise inquiry">
        {sent ? (
          <div className="nex-glass rounded-lg p-8 text-center">
            <p className="text-nex-white">Message saved locally for demo. Connect backend before production.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="nex-glass mx-auto max-w-lg space-y-4 rounded-lg p-6">
            <label className="block text-sm">
              <span className="text-nex-muted">Name</span>
              <input name="name" required className={inputClass} />
            </label>
            <label className="block text-sm">
              <span className="text-nex-muted">Email</span>
              <input name="email" type="email" required className={inputClass} />
            </label>
            <label className="block text-sm">
              <span className="text-nex-muted">Type</span>
              <select name="type" className={inputClass}>
                <option>Pilot / Operator</option>
                <option>Investor</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="text-nex-muted">Message</span>
              <textarea name="message" required rows={5} className={inputClass} />
            </label>
            <button type="submit" className="rounded-md bg-nex-blue px-6 py-3 text-sm font-medium text-white">
              Send (demo)
            </button>
            <p className="text-xs text-nex-muted">Demo form — no email backend connected.</p>
          </form>
        )}
      </SectionShell>
    </>
  );
}
