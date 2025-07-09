import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="nav-title">
        <Link to="/">
          <h2>#VANLIFE</h2>
        </Link>
      </div>
      <div className="nav-links">
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
