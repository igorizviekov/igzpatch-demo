import {
  countActiveIncidents,
  isSlaBreached,
  sortIncidentsBySeverity,
} from "@/lib/incidents";
import { sampleIncidents } from "@/lib/sample-data";

export default function Home() {
  const incidents = sortIncidentsBySeverity(sampleIncidents);
  const activeCount = countActiveIncidents(sampleIncidents);
  const snapshotTime = new Date("2026-06-28T12:00:00.000Z");

  return (
    <main className="shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">RelayOps</p>
          <h1>Incident command board</h1>
        </div>
        <span className="environment">Production</span>
      </header>

      <section className="summary" aria-label="Incident summary">
        <article><span>Active incidents</span><strong>{activeCount}</strong></article>
        <article>
          <span>Critical</span>
          <strong>{sampleIncidents.filter((incident) => incident.severity === "critical").length}</strong>
        </article>
        <article>
          <span>Teams engaged</span>
          <strong>{new Set(sampleIncidents.map((incident) => incident.owner)).size}</strong>
        </article>
      </section>

      <section className="board">
        <div className="toolbar">
          <div><h2>Live queue</h2><p>Sorted by operational severity</p></div>
          <div className="filters" aria-label="Incident filters">
            <button className="active" type="button">All</button>
            <button type="button">Open</button>
            <button type="button">Owned by me</button>
          </div>
        </div>

        <div className="incidentGrid">
          {incidents.map((incident) => (
            <article className="incidentCard" key={incident.id}>
              <div className="cardMeta">
                <span className={`severity ${incident.severity}`}>{incident.severity}</span>
                <span>{incident.id}</span>
              </div>
              <h3>{incident.title}</h3>
              <dl>
                <div><dt>Owner</dt><dd>{incident.owner}</dd></div>
                <div><dt>Status</dt><dd>{incident.status}</dd></div>
                <div>
                  <dt>SLA</dt>
                  <dd>{isSlaBreached(incident.dueAt, snapshotTime, incident.status) ? "Breached" : "On track"}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
