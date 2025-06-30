import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import "../../styles/host/dashboard.css";

export default function DashboardLayout() {
  return (
    <section className="dashboard-page">
      <DashboardNavbar />
      <Outlet />
    </section>
  );
}
