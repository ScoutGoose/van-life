import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import DashboardVanCard from "../../components/DashboardVanCard";
import "../../styles/pages-styles/host/dashboard.css";
export default function Dashboard() {
  // PLACEHOLDER TO SIMULATE FUTURE FETCH REQUEST
  const [vans, setVans] = useState(null);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);
  console.log(vans);
  return (
    <section className="dashboard-page">
      <div className="dashboard-navbar">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/vans">Vans</Link>
        <Link to="/host/reviews">Reviews</Link>
      </div>
      <div className="dashboard-info">
        <div className="dashboard-income">
          <h2>Welcome!</h2>
          <p>
            Income in last <span>30 days</span>
            <Link>Details</Link>
          </p>
          <h3>$2,260</h3>
        </div>
        <div className="dashboard-reviews">
          <p>
            Review score <IoIosStar className="star-icon" />
            <span className="dashboard-score">
              5.0
              <span>/5</span>
            </span>
            <Link>Details</Link>
          </p>
        </div>
        <div className="dashboard-listings">
          <p>
            Your listed vans <Link>View all</Link>
          </p>
          {vans &&
            vans.map((van) => {
              return <DashboardVanCard {...van} key={van.id} />;
            })}
        </div>
      </div>
    </section>
  );
}
