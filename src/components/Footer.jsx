export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__col">
            <h4>About</h4>
            <ul>
              <li><a href="#about">About Confluence</a></li>
              <li><a href="#faq">Help / FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="site-footer__col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#hubs">Country Hubs</a></li>
              <li><a href="#knowledge-hub">Knowledge Hub</a></li>
              <li><a href="#funding">Funding</a></li>
            </ul>
          </div>
          <div className="site-footer__col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
              <li><a href="#responsible-data">Responsible Data</a></li>
              <li><a href="#report">Report a Problem</a></li>
            </ul>
          </div>
          <div className="site-footer__col">
            <h4>Confluence</h4>
            <p className="text-muted" style={{ color: "rgba(255,255,255,.7)", fontSize: "var(--fs-sm)" }}>
              A global network connecting local assistive technology innovation hubs.
            </p>
          </div>
        </div>
        <p className="site-footer__bottom">&copy; {new Date().getFullYear()} Confluence Global Assistive Technology Innovation Hub.</p>
      </div>
    </footer>
  );
}
