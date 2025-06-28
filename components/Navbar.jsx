import { Link } from "react-router-dom";
import "../styles/components-styles/navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="nav-title">
        <Link to="/">
          <h2>#VANLIFE</h2>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/vans">Vans</Link>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
