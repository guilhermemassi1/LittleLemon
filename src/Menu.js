import "./menu.css";
import greeksalad from "./images/greeksalad.jpg";
import pasta from "./images/pasta.jpg";
import tomatotoast from "./images/tomatotoast.jpg";
export default function Menu() {
  return (
    <div className="menu">
      <h2 id="menuTitle">Our Menu</h2>
      <div className="dishsCards">
        <div className="dishCard">
          <div className="dishInfo">
            <h3>Greek Salad</h3>
            <h4>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</h4>
            <p>$12.99</p>
          </div>
          <img src={greeksalad} alt="greeksalad" className="dishImg" />
        </div>
        <div className="dishCard">
          <div className="dishInfo">
            <h3>Pasta Bolognesa</h3>
            <h4>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</h4>
            <p>$15.99</p>
          </div>
          <img src={pasta} alt="pasta bolognesa" className="dishImg" />
        </div>
        <div className="dishCard">
          <div className="dishInfo">
            <h3>Tomato Toast</h3>
            <h4>Lorem ipsum dolor sit amet, onsectetur adipiscing elit.</h4>
            <p>$10.99</p>
          </div>
          <img src={tomatotoast} alt="tomato toast" className="dishImg" />
        </div>
      </div>
    </div>
  );
}
