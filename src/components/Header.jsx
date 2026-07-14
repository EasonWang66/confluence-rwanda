import { Link } from "react-router-dom";

/**
 * Shared site header: logo, a Sign In button, and a breadcrumb row.
 * `crumbs` is an array of { label, to? } — the last item (no `to`) renders
 * as the current page.
 */
export default function Header({ crumbs = [{ label: "Confluence Rwanda" }] }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          <Link to="/" className="brand">
            <img src="/logo.svg" alt="" className="brand__mark" />
            Confluence
          </Link>
          <a href="#signin" className="btn btn--primary">Sign In</a>
        </div>
        <p className="breadcrumb">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={crumb.label} style={{ display: "contents" }}>
                {crumb.to && !isLast ? <Link to={crumb.to}>{crumb.label}</Link> : (
                  <span className="breadcrumb__current">{crumb.label}</span>
                )}
                {!isLast && <span aria-hidden="true">/</span>}
              </span>
            );
          })}
        </p>
      </div>
    </header>
  );
}
