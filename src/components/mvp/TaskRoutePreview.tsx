"use client";

import { VisualFrame } from "@/components/visuals/VisualFrame";

export function TaskRoutePreview({ taskTitle }: { taskTitle: string }) {
  const points = [
    { x: 20, y: 80, label: "Start" },
    { x: 80, y: 50, label: "Hall" },
    { x: 140, y: 60, label: "Turn" },
    { x: 200, y: 40, label: "Target" },
  ];

  return (
    <VisualFrame title="Task route" subtitle={taskTitle} label="Simulated">
      <svg viewBox="0 0 240 100" className="w-full h-24">
        <path
          d={`M ${points.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
          fill="none"
          stroke="#2d7cff"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.8"
        />
        {points.map((p, i) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r={i === points.length - 1 ? 6 : 4} fill={i === points.length - 1 ? "#3dd6f5" : "#2d7cff"} />
            <text x={p.x} y={p.y + 18} textAnchor="middle" fontSize="8" fill="#8b8b96">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </VisualFrame>
  );
}
