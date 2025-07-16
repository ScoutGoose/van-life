import { useState, useEffect } from "react";
import { useSearchParams, NavLink, Link } from "react-router-dom";
import "../../styles/main/vans.css";
import VanCard from "../../components/main-components/VanCard";
import Loader from "../../components/main-components/Loader";
export default function Vans() {
  const [vans, setVans] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="vans-page">
      <h2>Explore our van options</h2>
      <div className="filter-menu">
        <NavLink
          to="?type=simple"
          className={({ isActive }) =>
            isActive && typeFilter === "simple"
              ? "active-filter simple"
              : "simple"
          }
        >
          Simple
        </NavLink>
        <NavLink
          to="?type=luxury"
          className={({ isActive }) =>
            isActive && typeFilter === "luxury"
              ? "active-filter luxury"
              : "luxury"
          }
        >
          Luxury
        </NavLink>
        <NavLink
          to="?type=rugged"
          className={({ isActive }) =>
            isActive && typeFilter === "rugged"
              ? "active-filter rugged"
              : "rugged"
          }
        >
          Rugged
        </NavLink>
        <Link to=".">Clear</Link>
      </div>
      <div className="vans-options-container">
        {vans ? (
          typeFilter ? (
            vans
              .filter((van) => van.type === typeFilter)
              .map((van) => <VanCard {...van} key={van.id} />)
          ) : (
            vans.map((van) => <VanCard {...van} key={van.id} />)
          )
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}
