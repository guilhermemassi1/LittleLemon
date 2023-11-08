import Header from "./Header";
import "./homepage.css";
import Menu from "./Menu";
import HeroBanner from "./HeroBanner";
import Footer from "./Footer";
function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <HeroBanner />
      <Menu />
      <Footer />
    </div>
  );
}

export default Homepage;
