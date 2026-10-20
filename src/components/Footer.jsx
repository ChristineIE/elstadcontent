import { Link } from "react-router-dom";
import { siteConfig, isPlaceholder } from "../data/siteConfig.js";

export default function Footer() {
  const year = new Date().getFullYear();

  // Both links are read from src/data/siteConfig.js
  const linkedin = siteConfig.links.find((link) => link.label === "LinkedIn");
  const hasEmail = !isPlaceholder(siteConfig.email);
  const hasLinkedin = linkedin && linkedin.href;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {siteConfig.name}
        </p>
        <ul className="footer__links">
          <li>
            {hasEmail ? (
              <a href={`mailto:${siteConfig.email}`} className="nav-link">
                Email
              </a>
            ) : (
              <Link to="/contact" className="nav-link">
                Email
              </Link>
            )}
          </li>
          <li>
            {hasLinkedin ? (
              <a href={linkedin.href} className="nav-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            ) : (
              <Link to="/contact" className="nav-link">
                LinkedIn
              </Link>
            )}
          </li>
        </ul>
      </div>
    </footer>
  );
}
