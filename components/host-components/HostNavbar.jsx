import { NavLink } from "react-router-dom";
export default function HostNavbar() {
  return (
    <div className="host-navbar">
      <NavLink
        to="."
        end
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Reviews
      </NavLink>
    </div>
  );
}
