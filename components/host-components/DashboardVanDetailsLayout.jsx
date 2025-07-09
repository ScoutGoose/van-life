import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../../styles/host/dashboardVanDetails.css";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
export default function DashboardVanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((error) => console.log(error));
  }, []);
  console.log(van);

  return (
    <section className="dashboard-van-details">
      <Link to="/host/vans">
        <HiOutlineArrowLeft className="back-icon" />
        Back to all vans
      </Link>
      <div className="dashboard-details-container">
        <div className="image-and-name">
          <div className="photo-container">{/* <img src="" alt="" /> */}</div>
          <div className="name-and-price">
            <span className="type"></span>
            <h3 className="name"></h3>
            <h5 className="price"></h5>
          </div>
        </div>
        <div className="details-nav">
          <NavLink
            to=""
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
        <Outlet />
      </div>
    </section>
  );
}
