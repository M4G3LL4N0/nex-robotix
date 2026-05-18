"use client";

import { cn } from "@/lib/utils";

export interface DemoTask {
  id: string;
  title: string;
  site: string;
  priority: string;
}

interface TaskQueueProps {
  tasks: DemoTask[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function TaskQueue({ tasks, selectedId, onSelect }: TaskQueueProps) {
  return (
    <div className="nex-glass rounded-lg p-4">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-nex-cyan">Task Queue</h3>
      <p className="mb-3 text-[10px] text-nex-amber">Simulated data</p>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              onClick={() => onSelect(task.id)}
              className={cn(
                "w-full rounded border px-3 py-2 text-left text-sm transition",
                selectedId === task.id
                  ? "border-nex-blue bg-nex-blue/10 text-nex-white"
                  : "border-nex-border bg-nex-gunmetal/50 text-nex-muted hover:border-nex-blue/30",
              )}
            >
              <span className="block font-medium">{task.title}</span>
              <span className="mt-0.5 block text-xs opacity-70">
                {task.site} · {task.priority}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
