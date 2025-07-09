import "../../styles/host/dashboardVans.css";
import DashboardVanCard from "../../components/host-components/DashboardVanCard";
import Loader from "../../components/main-components/Loader";
import { useEffect, useState } from "react";
export default function DashboardVans() {
  const [vans, setVans] = useState(null);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);
  console.log(vans);
  return (
    <section className="dashboard-vans">
      <h2>Your listed vans</h2>
      <div className="vans-container">
        {vans ? (
          vans.map((van) => <DashboardVanCard {...van} key={van.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}
