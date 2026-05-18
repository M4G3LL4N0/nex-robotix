"use client";

import { VisualFrame } from "@/components/visuals/VisualFrame";

interface RoiVisualChartProps {
  monthlyValue: number;
  weeklyHours: number;
  priorityScore: number;
}

export function RoiVisualChart({ monthlyValue, weeklyHours, priorityScore }: RoiVisualChartProps) {
  const bars = [
    { label: "Hours/wk", value: weeklyHours, max: 200 },
    { label: "Value/mo", value: monthlyValue / 100, max: 50 },
    { label: "Priority", value: priorityScore, max: 100 },
  ];

  return (
    <VisualFrame title="ROI visualization" subtitle="Estimate only — not financial advice" label="Estimate only">
      <div className="flex h-32 items-end justify-around gap-4 pt-4">
        {bars.map((b) => (
          <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-24 w-full flex-col justify-end rounded-t border border-nex-border bg-nex-black/40">
              <div
                className="w-full rounded-t bg-gradient-to-t from-nex-blue to-nex-cyan/60"
                style={{ height: `${Math.min(100, (b.value / b.max) * 100)}%` }}
              />
            </div>
            <span className="font-mono text-xs text-nex-white">{Math.round(b.value)}</span>
            <span className="text-[10px] text-nex-muted">{b.label}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
