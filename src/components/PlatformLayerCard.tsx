import { StatusPill } from "@/components/StatusPill";
import type { PlatformLayer } from "@/lib/nex-data";

export function PlatformLayerCard({ layer }: { layer: PlatformLayer }) {
  return (
    <article id={layer.id} className="nex-glass scroll-mt-24 rounded-lg p-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold text-nex-white">{layer.name}</h3>
        <StatusPill label={layer.label} />
      </div>
      <p className="text-sm leading-relaxed text-nex-muted">{layer.description}</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {layer.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-nex-white/80">
            <span className="h-1 w-1 rounded-full bg-nex-blue" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}
