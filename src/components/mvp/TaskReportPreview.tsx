import { SAMPLE_TASK_REPORT } from "@/lib/nex-data";

export function TaskReportPreview() {
  const r = SAMPLE_TASK_REPORT;
  return (
    <div className="nex-glass rounded-lg p-4">
      <h3 className="mb-1 font-mono text-xs uppercase tracking-widest text-nex-cyan">Task Report Preview</h3>
      <p className="mb-4 text-[10px] text-nex-amber">Sample generated report · Demo</p>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between border-b border-nex-border/50 pb-2">
          <dt className="text-nex-muted">Task</dt>
          <dd className="text-nex-white">{r.task}</dd>
        </div>
        <div className="flex justify-between border-b border-nex-border/50 pb-2">
          <dt className="text-nex-muted">Status</dt>
          <dd className="text-emerald-400">{r.status}</dd>
        </div>
        <div className="flex justify-between border-b border-nex-border/50 pb-2">
          <dt className="text-nex-muted">Photos captured</dt>
          <dd className="font-mono text-nex-white">{r.photos}</dd>
        </div>
        <div className="flex justify-between border-b border-nex-border/50 pb-2">
          <dt className="text-nex-muted">Issue found</dt>
          <dd className="max-w-[60%] text-right text-nex-white">{r.issue}</dd>
        </div>
        <div className="flex justify-between border-b border-nex-border/50 pb-2">
          <dt className="text-nex-muted">Human assist</dt>
          <dd className="max-w-[60%] text-right text-nex-muted">{r.humanAssist}</dd>
        </div>
        <div className="flex justify-between border-b border-nex-border/50 pb-2">
          <dt className="text-nex-muted">Timestamp</dt>
          <dd className="font-mono text-xs text-nex-muted">{r.timestamp}</dd>
        </div>
        <div className="flex justify-between pt-1">
          <dt className="text-nex-muted">Next action</dt>
          <dd className="max-w-[60%] text-right text-nex-cyan">{r.nextAction}</dd>
        </div>
      </dl>
    </div>
  );
}
