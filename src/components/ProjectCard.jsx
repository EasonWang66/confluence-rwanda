import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

function mediaClassFor(mediaKey) {
  switch (mediaKey) {
    case "alt": return "media-placeholder media-placeholder--alt";
    case "map": return "media-placeholder media-placeholder--map";
    case "tall": return "media-placeholder media-placeholder--tall";
    default: return "media-placeholder";
  }
}

export default function ProjectCard({ project, compact = false }) {
  return (
    <article className="project-card card">
      <div className={mediaClassFor(project.media)} aria-hidden="true">
        <Icon name="leaf" />
      </div>
      <div className="card__body">
        <div className="badge-row project-card__badges">
          <span className={`badge badge--${project.sectorBadge}`}>{project.sector}</span>
          <span className={`badge badge--${project.stageIsCollab ? "orange" : "green"}`}>&bull; {project.status}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__meta"><strong>Local need:</strong> {project.localNeed}</p>
        <p className="project-card__meta"><strong>Partners:</strong> {project.partners}</p>
        <p className="project-card__support">Support needed: {project.supportNeeded}</p>
        <div className="project-card__actions">
          <Link className="btn btn--primary btn--sm" to={`/projects/${project.id}`}>View Project</Link>
          {!compact && <a className="btn btn--secondary btn--sm" href="#follow">Follow</a>}
        </div>
      </div>
    </article>
  );
}
