"use client";

import { useMemo, useState } from "react";
import { DEMO_ROBOTS, DEMO_TASKS } from "@/lib/nex-data";
import { FleetOverview } from "./FleetOverview";
import { TaskQueue } from "./TaskQueue";
import { RobotDetailPanel } from "./RobotDetailPanel";
import { PilotWorkflowBuilder } from "./PilotWorkflowBuilder";
import { RoiEstimator } from "./RoiEstimator";
import { TaskReportPreview } from "./TaskReportPreview";
import { StatusPill } from "@/components/StatusPill";
import { FleetMapGraphic } from "./FleetMapGraphic";
import { TelemetryPanel } from "./TelemetryPanel";
import { TaskRoutePreview } from "./TaskRoutePreview";
import { SelectedRobotVisual } from "./SelectedRobotVisual";
import { PilotReadinessGraphic } from "@/components/visuals/PilotReadinessGraphic";
import { TaskWorkflowDiagram } from "@/components/visuals/TaskWorkflowDiagram";
import { FleetCommandGraphic } from "@/components/visuals/FleetCommandGraphic";

export function FleetDashboard() {
  const [selectedRobotId, setSelectedRobotId] = useState(DEMO_ROBOTS[0].id);
  const [selectedTaskId, setSelectedTaskId] = useState(DEMO_TASKS[0].id);

  const selectedRobot = useMemo(
    () => DEMO_ROBOTS.find((r) => r.id === selectedRobotId) ?? null,
    [selectedRobotId],
  );

  const selectedTask = useMemo(
    () => DEMO_TASKS.find((t) => t.id === selectedTaskId) ?? DEMO_TASKS[0],
    [selectedTaskId],
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-nex-amber/30 bg-nex-amber/5 px-4 py-3">
        <p className="text-sm text-nex-white">
          <strong>Demo dashboard</strong> with simulated data. Not a live production system.
        </p>
        <StatusPill label="Simulated data" />
      </div>

      <FleetCommandGraphic />

      <div className="grid gap-6 xl:grid-cols-4">
        <div className="space-y-6 xl:col-span-2">
          <FleetOverview
            robots={DEMO_ROBOTS}
            selectedId={selectedRobotId}
            onSelect={setSelectedRobotId}
          />
          <TaskQueue tasks={DEMO_TASKS} selectedId={selectedTaskId} onSelect={setSelectedTaskId} />
        </div>
        <div className="space-y-6">
          <SelectedRobotVisual model={selectedRobot?.model ?? "NEX Mini"} />
          <RobotDetailPanel robot={selectedRobot} />
          <TelemetryPanel robot={selectedRobot} />
        </div>
        <div className="space-y-6">
          <FleetMapGraphic />
          <TaskRoutePreview taskTitle={selectedTask.title} />
          <div className="nex-glass rounded-lg border border-nex-border p-3 text-xs">
            <p className="font-mono uppercase text-nex-cyan">Human assist</p>
            <p className="mt-2 text-nex-muted">
              {selectedRobot?.remoteAssist ? (
                <span className="text-emerald-400">Available · Simulated</span>
              ) : (
                <span className="text-nex-muted">Unavailable</span>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <PilotWorkflowBuilder />
        <PilotReadinessGraphic />
      </div>

      <TaskWorkflowDiagram />

      <RoiEstimator />

      <TaskReportPreview />
    </div>
  );
}
