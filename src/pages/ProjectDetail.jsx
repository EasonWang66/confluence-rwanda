import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Icon from "../components/Icon.jsx";
import { getProjectById, projects } from "../data/projects.js";

function mediaClassFor(mediaKey) {
  switch (mediaKey) {
    case "alt": return "media-placeholder media-placeholder--alt";
    case "map": return "media-placeholder media-placeholder--map";
    case "tall": return "media-placeholder media-placeholder--tall";
    default: return "media-placeholder";
  }
}

function initials(name) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "updates", label: "Updates" },
  { id: "team", label: "Team" },
  { id: "support", label: "Support" }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id) || projects[0];
  const [activeTab, setActiveTab] = useState("overview");
  const [following, setFollowing] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header
        crumbs={[
          { label: "Confluence Rwanda", to: "/" },
          { label: "Projects", to: "/projects" },
          { label: project.title }
        ]}
      />

      <main id="main">
        <div className="container">
          <Link to="/projects" className="back-link">
            <span aria-hidden="true">&larr;</span> Back
          </Link>

          <section className="project-hero">
            <div className={`${mediaClassFor(project.media)} project-hero__media`} aria-hidden="true" />
            <div className="badge-row project-hero__badges">
              <span className={`badge badge--${project.sectorBadge}`}>{project.sector}</span>
              <span className={`badge badge--${project.stageIsCollab ? "orange" : "green"}`}>&bull; {project.status}</span>
              <span className="badge badge--neutral">&bull; {project.stage}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="project-hero__description">{project.description}</p>
            <div className="project-hero__actions">
              <a href="#join" className="btn btn--primary btn--icon"><Icon name="userPlus" /> Join Project</a>
              <button
                type="button"
                className={`btn btn--icon ${following ? "btn--primary" : "btn--secondary"}`}
                onClick={() => setFollowing((v) => !v)}
              >
                <Icon name="heart" /> {following ? "Following" : "Follow Project"}
              </button>
              <a href="#contact" className="btn btn--secondary btn--icon"><Icon name="mail" /> Contact Team</a>
              <button
                type="button"
                className={`btn btn--icon ${saved ? "btn--primary" : "btn--secondary"}`}
                onClick={() => setSaved((v) => !v)}
              >
                <Icon name="bookmark" /> {saved ? "Saved" : "Save"}
              </button>
            </div>
          </section>

          <div className="project-layout">
            <div className="project-main">
              <div className="tabs">
                <div className="tabs__list" role="tablist" aria-label="Project sections">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      className="tab"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === "overview" && (
                <div className="tab-panel" role="tabpanel">
                  <div className="card info-card">
                    <div className="card__body">
                      <h2>Local Need / Opportunity</h2>
                      <p>{project.opportunity}</p>
                    </div>
                  </div>

                  <div className="card info-card">
                    <div className="card__body">
                      <h2>Project Description</h2>
                      <p>{project.description}</p>
                      <div className="project-media-pair">
                        <div className="media-placeholder" aria-hidden="true" />
                        <div className="media-placeholder media-placeholder--alt" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div className="card info-card">
                    <div className="card__body">
                      <h2>Related Narrative / Context</h2>
                      <div className="narrative-preview">
                        <div className="media-placeholder media-placeholder--square narrative-preview__media" aria-hidden="true" />
                        <div className="narrative-preview__copy">
                          <div className="badge-row">
                            <span className="badge badge--neutral">{project.narrativeCard.location}</span>
                            <span className="badge badge--neutral">&bull; {project.narrativeCard.locationNote}</span>
                          </div>
                          <h3>{project.narrativeCard.title}</h3>
                          <p className="text-muted">{project.narrativeCard.body}</p>
                          <a href="#full-narrative" className="btn btn--secondary btn--sm">View Full Narrative</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card info-card">
                    <div className="card__body">
                      <h2>Sustainability &amp; Localization</h2>
                      <ul className="list-check">
                        {project.sustainability.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "updates" && (
                <div className="tab-panel" role="tabpanel">
                  <div className="card info-card">
                    <div className="card__body">
                      <p className="text-muted">No updates have been posted for this project yet. Check back soon, or follow the project to be notified when the team shares progress.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div className="tab-panel" role="tabpanel">
                  <div className="card info-card">
                    <div className="card__body">
                      <h2>Team</h2>
                      <ul className="list-check">
                        {project.participants.map((person) => (
                          <li key={person.name}>{person.name} &mdash; {person.role}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "support" && (
                <div className="tab-panel" role="tabpanel">
                  <div className="card info-card">
                    <div className="card__body">
                      <h2>Support Needed</h2>
                      <p className="text-muted">{project.supportNeeded}. Reach out via Contact Team if your organization can help.</p>
                      <a href="#offer-support" className="btn btn--primary">Offer Support</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="project-sidebar">
              <div className="card sidebar-card">
                <div className="card__body">
                  <h2>Project Details</h2>
                  <dl className="detail-list">
                    <div><dt>Country</dt><dd>{project.country}</dd></div>
                    <div><dt>Type</dt><dd>{project.sector}</dd></div>
                    <div><dt>Stage</dt><dd>{project.stage}</dd></div>
                    <div><dt>Visibility</dt><dd>{project.visibility}</dd></div>
                  </dl>
                </div>
              </div>

              <div className="card sidebar-card">
                <div className="card__body">
                  <h2>Quick Actions</h2>
                  <ul className="quick-actions">
                    <li><a href="#map"><Icon name="mapPin" /> View on Map</a></li>
                    <li><a href="#narrative"><Icon name="fileText" /> View Related Narrative</a></li>
                    <li><Link to="/projects"><Icon name="search" /> Find Similar Projects</Link></li>
                  </ul>
                </div>
              </div>

              <div className="card sidebar-card">
                <div className="card__body">
                  <h2>Project Participants</h2>
                  <ul className="participants-list">
                    {project.participants.map((person) => (
                      <li className="participant" key={person.name}>
                        <span className="participant__who">
                          <span className="avatar">{initials(person.name)}</span>
                          {person.name}
                        </span>
                        <span className={`badge badge--${person.role === "Initiator" ? "green" : "neutral"}`}>{person.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
