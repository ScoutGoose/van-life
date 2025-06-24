import { Link } from "react-router-dom";
import "../styles/home.css";
export default function Home() {
  return (
    <section className="homepage">
      <div className="homepage-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="btn homepage-btn">
          Find your van
        </Link>
      </div>
    </section>
  );
}
