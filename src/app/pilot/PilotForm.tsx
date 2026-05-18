"use client";

import { useState } from "react";

const INDUSTRIES = [
  "Hospitality",
  "Construction",
  "Logistics",
  "Facilities",
  "Retail",
  "Healthcare support",
  "Other",
];

export function PilotForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "nex-pilot-inquiry-demo",
        JSON.stringify({ ...data, savedAt: new Date().toISOString() }),
      );
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="nex-glass rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-nex-white">Pilot inquiry received (demo)</h3>
        <p className="mt-4 text-nex-muted">
          Pilot inquiry saved locally for demo. Connect backend before production.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1 w-full rounded border border-nex-border bg-nex-black px-3 py-2 text-sm text-nex-white focus:border-nex-blue focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="nex-glass space-y-4 rounded-lg p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-nex-muted">Name *</span>
          <input name="name" required className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Company *</span>
          <input name="company" required className={inputClass} />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-nex-muted">Email *</span>
          <input name="email" type="email" required className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Industry *</span>
          <select name="industry" required className={inputClass}>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Location *</span>
          <input name="location" required className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Number of sites</span>
          <input name="sites" type="number" min={1} className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Timeline</span>
          <input name="timeline" placeholder="e.g. Q3 2026" className={inputClass} />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-nex-muted">Biggest physical workflow pain *</span>
          <textarea name="pain" required rows={3} className={inputClass} />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-nex-muted">Tasks you want automated</span>
          <textarea name="tasks" rows={3} className={inputClass} />
        </label>
        <label className="block text-sm">
          <span className="text-nex-muted">Budget range</span>
          <select name="budget" className={inputClass}>
            <option value="">Select</option>
            <option value="exploring">Exploring / TBD</option>
            <option value="under-50k">Under $50k pilot</option>
            <option value="50-150k">$50k – $150k</option>
            <option value="150k+">$150k+</option>
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="text-nex-muted">Notes</span>
          <textarea name="notes" rows={2} className={inputClass} />
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-nex-blue py-3 text-sm font-medium text-white hover:bg-nex-blue/90 sm:w-auto sm:px-8"
      >
        Submit pilot inquiry
      </button>
      <p className="text-xs text-nex-muted">Demo form — stores locally only. No backend connected.</p>
    </form>
  );
}
