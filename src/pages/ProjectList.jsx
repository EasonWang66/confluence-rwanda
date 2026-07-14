import { useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Icon from "../components/Icon.jsx";
import { projects } from "../data/projects.js";

export default function ProjectList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [stage, setStage] = useState("");

  const results = useMemo(() => {
    return projects.filter((p) => {
      const haystack = `${p.title} ${p.localNeed} ${p.partners}`.toLowerCase();
      const qOk = !query.trim() || haystack.includes(query.trim().toLowerCase());
      const typeOk = !type || p.sector === type;
      const stageOk = !stage || p.status === stage;
      return qOk && typeOk && stageOk;
    });
  }, [query, type, stage]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header crumbs={[{ label: "Confluence Rwanda", to: "/" }, { label: "Projects" }]} />

      <main id="main">
        <section className="section welcome-hero">
          <div className="welcome-hero__media media-placeholder media-placeholder--hero" aria-hidden="true" />
          <div className="welcome-hero__overlay">
            <div className="container">
              <h1>Welcome</h1>
              <p>Explore assistive technology projects connected to local needs, community input, and collaborative partnerships.</p>
              <a href="#start" id="start" className="btn btn--primary">Start a Project</a>
            </div>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <form className="search-row" role="search" aria-label="Filter projects" onSubmit={(e) => e.preventDefault()}>
              <div className="search-input-wrap">
                <Icon name="search" />
                <label className="visually-hidden" htmlFor="q">Search projects</label>
                <input
                  type="search"
                  id="q"
                  className="search-input"
                  placeholder="Search projects..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <label className="visually-hidden" htmlFor="type">Project Type</label>
              <select id="type" className="filter-select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Project Type</option>
                <option value="Assistive Technology Development">Assistive Technology Development</option>
                <option value="GIS Mapping & Data Infrastructure">GIS Mapping &amp; Data Infrastructure</option>
                <option value="Capacity Building & Training">Capacity Building &amp; Training</option>
                <option value="Awareness, Outreach & Advocacy">Awareness, Outreach &amp; Advocacy</option>
              </select>
              <label className="visually-hidden" htmlFor="stage">Project Stage</label>
              <select id="stage" className="filter-select" value={stage} onChange={(e) => setStage(e.target.value)}>
                <option value="">Project Stage</option>
                <option value="Active">Active</option>
                <option value="In Progress">In Progress</option>
                <option value="Planning">Planning</option>
                <option value="Looking for Collaborators">Looking for Collaborators</option>
              </select>
            </form>
          </div>
        </section>

        <section className="section section--tight">
          <div className="container">
            <p className="results-count"><span>{results.length}</span> projects found</p>
            {results.length > 0 ? (
              <div className="grid grid--2">
                {results.map((p) => <ProjectCard key={p.id} project={p} />)}
              </div>
            ) : (
              <p className="empty-state">No projects match your filters yet. Try clearing a filter.</p>
            )}
            <div className="list-actions">
              <a href="#start-project" className="btn btn--primary">Start a Project</a>
              <a href="/#map" className="btn btn--secondary">View Projects on Map</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
