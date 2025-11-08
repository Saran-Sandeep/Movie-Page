import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="navbar__container container">
        <h1 className="navbar__title">
          <NavLink to="/" className="navbar__brand">
            🎬 MoviePage
          </NavLink>
        </h1>

        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
