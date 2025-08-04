import { useState, useEffect } from "react";
import { useSearchParams, NavLink, Link } from "react-router-dom";
import "../../styles/main/vans.css";
import VanCard from "../../components/main-components/VanCard";
import Loader from "../../components/main-components/Loader";
import { getAllVans } from "../../src/api";
export default function Vans() {
  const [vans, setVans] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const typeFilter = searchParams.get("type");
  useEffect(() => {
    (async function () {
      const data = await getAllVans();
      setVans(data);
      setLoading(false);
    })();
  }, []);

  // ***********************************************************
  // Setting styles and search params for filter
  // ***********************************************************

  function handleFilter(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  return (
    <section className="vans-page">
      <h2>Explore our van options</h2>
      <div className="filter-menu">
        {/* ***************************** Filter menu using navlinks ***************************** */}
        {/* <NavLink
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
        <Link to=".">Clear</Link> */}
        <button
          className={`${typeFilter === "simple" ? "active-filter" : ""} simple`}
          onClick={() => handleFilter("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`${typeFilter === "luxury" ? "active-filter" : ""} luxury`}
          onClick={() => handleFilter("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`${typeFilter === "rugged" ? "active-filter" : ""} rugged`}
          onClick={() => handleFilter("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            className="clear-btn"
            onClick={() => handleFilter("type", null)}
          >
            Clear
          </button>
        ) : null}
      </div>
      <div className="vans-options-container">
        {loading ? (
          <Loader />
        ) : typeFilter ? (
          vans
            .filter((van) => van.type === typeFilter)
            .map((van) => (
              <VanCard
                {...van}
                key={van.id}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
              />
            ))
        ) : (
          vans.map((van) => (
            <VanCard
              {...van}
              key={van.id}
              state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter,
              }}
            />
          ))
        )}
      </div>
    </section>
  );
}
