import { Link } from "react-router-dom";
import "../styles/pages-styles/about.css";
export default function About() {
  return (
    <section className="about-page">
      <div className="about-header-img"></div>
      <div className="about-info">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-vans-redirect-container">
          <h3>Your destination is waiting.</h3>
          <h3>Your van is ready.</h3>
          <Link to="/vans" className="btn about-btn">
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  );
}
