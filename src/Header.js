import "./header.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="headerImg" src={logo} />
      </Link>
    </div>
  );
}
