import { StatusPill } from "@/components/StatusPill";
import { MetricCard } from "@/components/MetricCard";

export function CommandInterfaceVisual() {
  return (
    <div className="nex-glass nex-glow relative overflow-hidden rounded-xl border border-nex-border p-4">
      <div className="absolute right-3 top-3">
        <StatusPill label="Demo environment" />
      </div>
      <div className="mb-4 flex items-center gap-2 border-b border-nex-border pb-3">
        <span className="font-mono text-xs text-nex-cyan">NEX COMMAND</span>
        <span className="text-nex-muted">·</span>
        <span className="font-mono text-xs text-nex-muted">Simulated data</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <MetricCard label="Fleet active" value="3 / 4" demo sublabel="Demo robots online" />
        <MetricCard label="Tasks queued" value="5" demo sublabel="Pilot demo queue" />
      </div>
      <div className="relative my-4 flex h-40 items-center justify-center rounded-lg border border-nex-border/60 bg-nex-black/50">
        <svg viewBox="0 0 120 160" className="h-32 w-auto opacity-80" aria-hidden>
          <defs>
            <linearGradient id="nex-sil" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2d7cff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2d7cff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="24" rx="18" ry="20" fill="url(#nex-sil)" stroke="#2d7cff" strokeWidth="1" />
          <rect x="48" y="44" width="24" height="50" rx="4" fill="url(#nex-sil)" stroke="#2d7cff" strokeWidth="1" />
          <rect x="30" y="50" width="12" height="40" rx="3" fill="#141418" stroke="#2a2a34" />
          <rect x="78" y="50" width="12" height="40" rx="3" fill="#141418" stroke="#2a2a34" />
          <rect x="40" y="98" width="16" height="45" rx="3" fill="#141418" stroke="#2a2a34" />
          <rect x="64" y="98" width="16" height="45" rx="3" fill="#141418" stroke="#2a2a34" />
          <circle cx="40" cy="148" r="8" fill="#1e1e26" stroke="#2d7cff" strokeWidth="1" />
          <circle cx="80" cy="148" r="8" fill="#1e1e26" stroke="#2d7cff" strokeWidth="1" />
        </svg>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between font-mono text-[10px] text-nex-muted">
          <span>NEX Mini · Concept</span>
          <span className="text-nex-cyan">H-01 · In Task</span>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { task: "Room 204 towel delivery", status: "Active" },
          { task: "Suite 118 room scan", status: "Queued" },
          { task: "Lobby supply restock", status: "Queued" },
        ].map((item) => (
          <div
            key={item.task}
            className="flex items-center justify-between rounded border border-nex-border bg-nex-gunmetal/50 px-3 py-2 text-xs"
          >
            <span className="text-nex-white/90">{item.task}</span>
            <span className="font-mono text-nex-muted">{item.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1 opacity-60">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-sm border border-nex-border/40 bg-nex-titanium/30" />
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[10px] text-nex-muted">
        Fleet map · Simulated telemetry
      </p>
    </div>
  );
}
