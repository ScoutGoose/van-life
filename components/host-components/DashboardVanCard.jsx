import { Link } from "react-router-dom";
import "../../styles/components-styles/dashboardVanCard.css";
export default function DashboardVanCard({ id, name, price, imageUrl }) {
  return (
    <div className="dashboard-van-card">
      <div className="image-container">
        <img src={imageUrl} alt="van photo" />
      </div>
      <div className="name-and-price">
        <h4>{name}</h4>
        <span>${price}/day</span>
      </div>
      <Link to={`/host/vans/${id}`}>Edit</Link>
    </div>
  );
}
