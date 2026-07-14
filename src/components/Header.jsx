import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";

/**
 * Shared site header: logo, responsive nav (hamburger below 1200px), and a
 * breadcrumb row. `crumbs` is an array of { label, to? } — the last item
 * (no `to`) renders as the current page.
 */
export default function Header({ crumbs = [{ label: "Confluence Rwanda" }] }) {
  const [navOpen, setNavOpen] = useState(false);

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          <div className="site-header__top">
            <Link to="/" className="brand">
              <img src="/logo.svg" alt="" className="brand__mark" />
              Confluence
            </Link>
            <button
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-controls="primary-nav"
              aria-label="Toggle menu"
              onClick={() => setNavOpen((v) => !v)}
            >
              <Icon name={navOpen ? "close" : "menu"} />
            </button>
          </div>
          <nav className={`site-nav${navOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Primary">
            <div className="site-nav__links">
              <NavLink to="/" end onClick={closeNav}>Rwanda Hub</NavLink>
              <NavLink to="/projects" onClick={closeNav}>Projects</NavLink>
              <a href="/#community" onClick={closeNav}>Community</a>
              <a href="/#map" onClick={closeNav}>Ecosystem Map</a>
            </div>
            <div className="site-nav__cta">
              <a href="#signin" className="btn btn--primary">Sign In</a>
            </div>
          </nav>
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
