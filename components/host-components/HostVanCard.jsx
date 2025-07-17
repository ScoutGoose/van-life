import { Link } from "react-router-dom";
import "../../styles/components-styles/hostVanCard.css";
export default function HostVanCard({ id, name, price, imageUrl }) {
  return (
    <Link to={`${id}`} className="host-van-card">
      <div className="image-container">
        <img src={imageUrl} alt="van photo" />
      </div>
      <div className="name-and-price">
        <h4>{name}</h4>
        <span>${price}/day</span>
      </div>
    </Link>
  );
}
