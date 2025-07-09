import { NavLink } from "react-router-dom";
export default function DashboardNavbar() {
  return (
    <div className="dashboard-navbar">
      <NavLink
        to="/host"
        end
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/host/income"
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Income
      </NavLink>
      <NavLink
        to="/host/vans"
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Vans
      </NavLink>
      <NavLink
        to="/host/reviews"
        className={({ isActive }) => (isActive ? "active-link" : null)}
      >
        Reviews
      </NavLink>
    </div>
  );
}
