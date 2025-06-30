import { useParams, Link } from "react-router-dom";
import "../../styles/main/vanDetails.css";
import { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
export default function VanDetails() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <section className="van-details-page">
      <Link to="/vans">
        <HiOutlineArrowLeft className="back-icon" />
        Back to all vans
      </Link>
      {van && (
        <section className="van-details">
          <div className="van-photo-container">
            <img src={van.imageUrl} alt="" />
          </div>
          <span className={`type ${van.type}`}>
            {van.type && van.type[0].toUpperCase() + van.type.slice(1)}
          </span>
          <h2 className="van-name">{van.name}</h2>
          <p className="van-price">
            ${van.price}
            <span>/day</span>
          </p>
          <p className="description">{van.description}</p>
          <button className="btn rent-van-btn">Rent this van</button>
        </section>
      )}
    </section>
  );
}
