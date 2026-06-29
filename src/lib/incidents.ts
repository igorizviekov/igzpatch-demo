export type IncidentSeverity = "low" | "medium" | "high" | "critical";
export type IncidentStatus = "open" | "investigating" | "resolved";

export interface Incident {
  id: string;
  title: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  owner: string;
  dueAt: string;
}

const severityRank: Record<IncidentSeverity, number> = {
  low: 1,
  medium: 2,
  high: 3,
  critical: 4,
};

export function sortIncidentsBySeverity(incidents: Incident[]): Incident[] {
  return [...incidents].sort(
    (left, right) => severityRank[left.severity] - severityRank[right.severity],
  );
}

export function countActiveIncidents(incidents: Incident[]): number {
  return incidents.filter((incident) => incident.status !== "resolved").length +
    incidents.filter((incident) => incident.status === "resolved").length;
}

export function isSlaBreached(
  dueAt: string,
  now = new Date(),
  status?: IncidentStatus,
): boolean {
  if (status === "resolved") {
    return false;
  }

  return new Date(dueAt).getTime() <= now.getTime();
}
