import { Link } from "react-router-dom";
import "../../styles/components-styles/vanCard.css";
export default function VanCard({ id, name, price, imageUrl, type }) {
  return (
    <div className="single-card">
      <Link to={`${id}`}>
        <div className="card-img-container">
          <img src={imageUrl} alt="van photo" />
        </div>
        <div className="van-info">
          <div className="name-and-type">
            <h3>{name}</h3>
            <span className={type}>
              {type && type[0].toUpperCase() + type.slice(1)}
            </span>
          </div>
          <div className="price">
            <h3>${price}</h3>
            <span>/day</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
