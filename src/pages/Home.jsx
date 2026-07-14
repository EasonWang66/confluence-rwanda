import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { getProjectById } from "../data/projects.js";

const FEATURED_IDS = ["wheelchair-design", "hearing-aid-maintenance-training", "at-service-gaps-mapping"];

const STATS = [
  { value: "89", label: "Lived experience narratives documented" },
  { value: "127", label: "Community needs mapped" },
  { value: "42", label: "Organizations and partners mapped" },
  { value: "24", label: "Active projects" },
  { value: "6", label: "GIS layers created" },
  { value: "18", label: "Local partners active" },
  { value: "35", label: "Knowledge Hub resources shared" },
  { value: "8", label: "Projects seeking support" }
];

export default function Home() {
  const featured = FEATURED_IDS.map(getProjectById).filter(Boolean);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header crumbs={[{ label: "Confluence Rwanda" }]} />

      <main id="main">
        <section className="hero">
          <div className="hero__media" aria-hidden="true" />
          <div className="hero__overlay">
            <div className="container hero__content">
              <h1>Confluence Rwanda</h1>
              <p className="hero__subtitle">A country-level hub for documenting local needs, mapping resources and gaps, connecting partners, and supporting sustainable assistive technology innovation in Rwanda.</p>
              <p className="hero__tagline">Rwanda is the first Confluence country implementation. Future hubs will focus on additional Sub-Saharan African countries.</p>
              <div className="hero__actions">
                <a href="#map" className="btn btn--primary">Explore Rwanda GIS Map</a>
                <Link to="/projects" className="btn btn--secondary btn--on-media">View Rwanda Projects</Link>
                <a href="#share-narrative" className="btn btn--secondary btn--on-media">Share a Narrative or Local Need</a>
                <a href="#partners" className="btn btn--secondary btn--on-media">Find Local Partners</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section overview">
          <div className="container overview__grid">
            <div className="media-placeholder overview__media" aria-hidden="true" />
            <div className="overview__copy">
              <h2>Rwanda Overview</h2>
              <p>Rwanda serves as the first Confluence country hub, piloting how locally-led assistive technology projects can be documented, supported, and connected with partners and makers across the region.</p>
              <p>Local context shapes every aspect of the platform — from the materials available to local fabricators, to the terrain wheelchairs must handle, to the languages narratives are recorded in. Every project here starts with a community-identified need.</p>
            </div>
          </div>
        </section>

        <section className="section section--tight impact">
          <div className="container">
            <h2 className="section-heading impact__heading">Rwanda Impact Snapshot</h2>
            <div className="grid impact__grid">
              {STATS.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-card__value">{s.value}</div>
                  <div className="stat-card__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-preview">
          <div className="container">
            <h2 className="section-heading">Rwanda Projects</h2>
            <div className="grid grid--3-desktop">
              {featured.map((p) => <ProjectCard key={p.id} project={p} compact />)}
            </div>
            <div className="projects-preview__actions">
              <Link to="/projects" className="btn btn--secondary">View All Rwanda Projects</Link>
              <Link to="/projects#start" className="btn btn--primary">Start a Project</Link>
            </div>
          </div>
        </section>

        <section className="section narratives">
          <div className="container">
            <h2 className="section-heading">Lived Experience Narratives &amp; Context</h2>
            <div className="grid grid--3-desktop">
              <article className="card narrative-card">
                <div className="media-placeholder" aria-hidden="true" />
                <div className="card__body">
                  <div className="badge-row">
                    <span className="badge badge--green">Assistive Technology Development</span>
                    <span className="badge badge--neutral">&bull; Pilot / Field Testing</span>
                  </div>
                  <h3>Transportation barriers in Kigali</h3>
                  <p className="text-muted">Limited accessible public transport options create daily mobility challenges for wheelchair users travelling across the city.</p>
                  <p className="narrative-card__related">Related project: Urban Mobility AT Project</p>
                  <a href="#narrative-1" className="btn btn--secondary btn--block btn--sm">View Narrative</a>
                </div>
              </article>
              <article className="card narrative-card">
                <div className="media-placeholder" aria-hidden="true" />
                <div className="card__body">
                  <div className="badge-row">
                    <span className="badge badge--neutral">Eastern Province</span>
                    <span className="badge badge--neutral">&bull; Planning</span>
                  </div>
                  <h3>Need for local wheelchair maintenance</h3>
                  <p className="text-muted">Distance to repair services and the cost of replacement parts leave many wheelchairs out of service for weeks at a time.</p>
                  <p className="narrative-card__related">Related project: Community Repair Training</p>
                  <a href="#narrative-2" className="btn btn--secondary btn--block btn--sm">View Narrative</a>
                </div>
              </article>
              <article className="card narrative-card">
                <div className="media-placeholder" aria-hidden="true" />
                <div className="card__body">
                  <div className="badge-row">
                    <span className="badge badge--neutral">GIS Mapping &amp; Data Infrastructure</span>
                    <span className="badge badge--neutral">&bull; In Progress</span>
                  </div>
                  <h3>Hearing aid battery availability</h3>
                  <p className="text-muted">Inconsistent access to batteries and limited information on where to find them affects daily hearing aid use.</p>
                  <a href="#narrative-3" className="btn btn--secondary btn--block btn--sm">View Narrative</a>
                </div>
              </article>
            </div>
            <div className="narratives__links">
              <a href="#narratives">Explore Rwanda Narratives &amp; Context</a>
              <a href="#share-narrative">Share a Narrative or Local Need</a>
              <a href="#map">View Narratives on the Rwanda Map</a>
            </div>
          </div>
        </section>

        <section className="section ecosystem" id="map">
          <div className="container">
            <h2 className="section-heading">Rwanda Ecosystem Map</h2>
            <div className="ecosystem__layout">
              <div className="ecosystem__legend">
                <h3>Map Layers</h3>
                <ul>
                  <li><span className="legend-dot legend-dot--a" />Lived Experience Narratives &amp; Context</li>
                  <li><span className="legend-dot legend-dot--b" />Community Needs</li>
                  <li><span className="legend-dot legend-dot--c" />Organizations / Local Partners</li>
                  <li><span className="legend-dot legend-dot--d" />Service Gaps</li>
                  <li><span className="legend-dot legend-dot--e" />Project Sites</li>
                  <li><span className="legend-dot legend-dot--f" />Local Makers / Materials</li>
                </ul>
              </div>
              <div className="media-placeholder media-placeholder--map ecosystem__map" aria-hidden="true" />
              <div className="card ecosystem__selected">
                <div className="card__body">
                  <p className="ecosystem__selected-label">Selected Item</p>
                  <div className="media-placeholder media-placeholder--square" aria-hidden="true" />
                  <h3>Wheelchair repair service gap</h3>
                  <p className="text-muted">Kigali District &mdash; Urban area</p>
                  <Link to="/projects/wheelchair-design" className="btn btn--primary btn--block btn--sm">View Details</Link>
                </div>
              </div>
            </div>
            <div className="ecosystem__actions">
              <a href="#gis-map">Open Rwanda GIS Map</a>
              <a href="#validate-data">Add or Validate Local Data</a>
            </div>
          </div>
        </section>

        <section className="section community" id="community">
          <div className="container">
            <h2 className="section-heading">Community and Collaboration</h2>
            <p className="community__intro">Practice guides, training resources, and lessons learned from projects across Rwanda, shared so future teams don't have to start from zero.</p>
            <div className="grid grid--3-desktop">
              <article className="card resource-card">
                <div className="card__body">
                  <span className="badge badge--neutral">Practice Guide</span>
                  <h3>Co-Design with Wheelchair Users: Field Guide</h3>
                  <a href="#resource-1" className="btn btn--secondary btn--block btn--sm">View Resource</a>
                </div>
              </article>
              <article className="card resource-card">
                <div className="card__body">
                  <span className="badge badge--neutral">Resource Directory</span>
                  <h3>Local Materials for AT Fabrication: Rwanda Directory</h3>
                  <a href="#resource-2" className="btn btn--secondary btn--block btn--sm">View Resource</a>
                </div>
              </article>
              <article className="card resource-card">
                <div className="card__body">
                  <span className="badge badge--neutral">Training Resource</span>
                  <h3>Community-Based Hearing Aid Maintenance: Training Guide</h3>
                  <a href="#resource-3" className="btn btn--secondary btn--block btn--sm">View Resource</a>
                </div>
              </article>
            </div>
            <div className="community__actions">
              <a href="#knowledge-hub" className="btn btn--dark">Browse Rwanda Knowledge Hub</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
