import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { createContext } from "react";
import "../../styles/host/hostVanDetails.css";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { getHostVan } from "../../src/api";
// const VanContext = createContext(null);
export default function HostVanDetailLayout() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    (async function () {
      const data = await getHostVan(id);
      setVan(data);
    })();
  }, []);
  return (
    <section className="host-van-details">
      <Link to=".." relative="path">
        <HiOutlineArrowLeft className="back-icon" />
        Back to all vans
      </Link>
      {van && (
        <div className="host-details-container">
          <div className="image-and-name">
            <div className="photo-container">
              <img src={`${van.imageUrl}`} alt={`${van.name} photo`} />
            </div>
            <div className="name-and-price">
              <span className="type">
                {van.type[0].toUpperCase() + van.type.slice(1)}
              </span>
              <h3 className="name">{van.name}</h3>
              <h5 className="price">
                ${van.price}
                <span>/day</span>
              </h5>
            </div>
          </div>
          <div className="details-nav">
            <NavLink
              to="."
              className={({ isActive }) => (isActive ? "active-link" : null)}
              end
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Photos
            </NavLink>
          </div>
          {/* <VanContext.Provider value={van}> */}
          <Outlet context={{ van }} />
          {/* </VanContext.Provider> */}
        </div>
      )}
    </section>
  );
}
// export { VanContext };
