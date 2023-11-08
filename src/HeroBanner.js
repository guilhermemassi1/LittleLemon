import "./herobanner.css";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <div className="herobanner">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean restaurant, focused on tradicional
        recipes served with a modern twist
      </p>
      <Link to="/booking" className="button">
        BOOK A TABLE
      </Link>
    </div>
  );
}
