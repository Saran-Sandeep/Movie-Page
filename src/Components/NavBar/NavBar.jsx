import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar__container">
      <div className="navbar__title">
        <a href="/">Movie Page</a>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
