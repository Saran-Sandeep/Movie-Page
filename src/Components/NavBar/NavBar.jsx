import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="navbar__container container">
        <h1 className="navbar__title">
          <Link to="/" className="navbar__brand">
            🎬 MoviePage
          </Link>
        </h1>
        <ul className="navbar__links">
          <li>
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="navbar__link">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
