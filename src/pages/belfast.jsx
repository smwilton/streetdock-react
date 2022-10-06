import { Navbar } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBelfast from "../components/NavBelfast";
import BelfastWelcome from "../components/BelfastWelcome";
import Why1 from "../components/Why1";
import Why2 from "../components/Why2";
import Why3 from "../components/Why3";
import Pricing from "../components/Pricing";
import HeroTest from "../components/HeroTest";

const Belfast = () => {
  return (
    <div>
      <NavBelfast />
      {/* <BelfastWelcome /> */}
      <HeroTest />
      <Why1 />
      <Why2 />
      <Why3 />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Belfast;
