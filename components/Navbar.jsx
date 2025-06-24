import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="nav-title">
        <Link to="/">
          <h2>#VANLIFE</h2>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </div>
    </nav>
  );
}
