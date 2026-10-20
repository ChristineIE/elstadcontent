import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Deliberately minimal: logo on the left, three links on the right.
// The "Get in touch" button lives in the hero instead of here.
export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label="Elstad Content – go to home page">
          <img className="header__logo" src={logo} alt="Elstad Content" />
        </Link>

        <nav aria-label="Main">
          <ul className="header__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) => (isActive ? "nav-link nav-link--active" : "nav-link")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
