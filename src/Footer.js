import "./footer.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
export default function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img className="footerImg" src={logo} />
      </Link>
      <h1>Copyright © guilhermemassi1</h1>
      <h2>1.0v</h2>
    </div>
  );
}
