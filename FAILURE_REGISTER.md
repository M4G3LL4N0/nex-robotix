# Failure Register: Nex Robotix

## Failure Rules
- Do not retry the same failed fix without new evidence.
- Do not hide blockers.
- Do not claim success without verification.
- If one failure consumes too much time, document it and move on.

## Failures

| Date | Failure | Exact Error | Likely Cause | Attempts Made | Current Status | Next Fix | Stop Condition |
|------|---------|-------------|--------------|---------------|----------------|----------|----------------|
| 2026-05-18 | build failed | see .noaerth_full_build_status.tsv | unknown | not fixed this loop | open | read build log, fix imports/env | stop after 2 fix attempts |
