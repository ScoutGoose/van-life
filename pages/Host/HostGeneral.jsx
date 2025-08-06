import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import HostVanCard from "../../components/host-components/HostVanCard";
import { getHostVans } from "../../src/api";
export default function HostGeneral() {
  const [vans, setVans] = useState(null);
  useEffect(() => {
    (async function () {
      const data = await getHostVans();
      setVans(data);
    })();
  }, []);
  return (
    <div className="host-general">
      <div className="host-general-income">
        <h2>Welcome!</h2>
        <p>
          Income in last <span>30 days</span>
          <Link to="income">Details</Link>
        </p>
        <h3>$2,260</h3>
      </div>
      <div className="host-general-reviews">
        <p>
          Review score <IoIosStar className="star-icon" />
          <span className="host-general-score">
            5.0
            <span>/5</span>
          </span>
          <Link to="reviews">Details</Link>
        </p>
      </div>
      <div className="host-general-listings">
        <p>
          Your listed vans <Link to="vans">View all</Link>
        </p>
        {vans &&
          vans.map((van) => {
            return <HostVanCard {...van} key={van.id} />;
          })}
      </div>
    </div>
  );
}
