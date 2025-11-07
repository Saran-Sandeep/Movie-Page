import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar__container">
      <div className="navbar__title">
        <a href="/">Movie Page</a>
      </div>
      <ul className="navbar__links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Favorites</a>
        </li>
      </ul>
    </nav>
  );
}
