import "../styles/vans.css";
import { useState, useEffect } from "react";
import VanCard from "../components/VanCard";
import { Link } from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = useState([]);
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
        {vans.map((van) => (
          <VanCard {...van} key={van.id} />
        ))}
      </div>
    </section>
  );
}
