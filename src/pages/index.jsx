import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Why1 from "../components/Why1";
import Why2 from "../components/Why2";
import Why3 from "../components/Why3";
import How2 from "../components/How2";
import Zones from "../components/Zones";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Hero />
      <Why1 />
      <Why2 />
      <Why3/>
      <How2 />
      <Zones />
      <Footer />
    </div>
  );
};

export default Home;
