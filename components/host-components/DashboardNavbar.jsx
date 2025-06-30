import { Link } from "react-router-dom";
export default function DashboardNavbar() {
  return (
    <div className="dashboard-navbar">
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/vans">Vans</Link>
      <Link to="/host/reviews">Reviews</Link>
    </div>
  );
}
