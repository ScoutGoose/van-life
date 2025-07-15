import "../../styles/host/hostVans.css";
import HostVanCard from "../../components/host-components/HostVanCard";
import Loader from "../../components/main-components/Loader";
import { useEffect, useState } from "react";
export default function HostVans() {
  const [vans, setVans] = useState(null);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);
  console.log(vans);
  return (
    <section className="host-vans">
      <h2>Your listed vans</h2>
      <div className="vans-container">
        {vans ? (
          vans.map((van) => <HostVanCard {...van} key={van.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}
