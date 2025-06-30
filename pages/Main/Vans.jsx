import { useState, useEffect } from "react";
import "../../styles/main/vans.css";
import VanCard from "../../components/main-components/VanCard";
import Loader from "../../components/main-components/Loader";
export default function Vans() {
  const [vans, setVans] = useState(null);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="vans-page">
      <h2>Explore our van options</h2>
      <div className="fiter-menu">{/* TODO */}</div>
      <div className="vans-options-container">
        {vans ? (
          vans.map((van) => <VanCard {...van} key={van.id} />)
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}
