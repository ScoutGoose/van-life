import { Outlet } from "react-router-dom";
import DashboardNavbar from "./HostNavbar";
import "../../styles/host/host.css";

export default function HostLayout() {
  return (
    <section className="host-page">
      <DashboardNavbar />
      <Outlet />
    </section>
  );
}
