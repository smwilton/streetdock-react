import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages";
import Belfast from "./pages/belfast";
import OrderPage from "./pages/order";

function App() {
 
 function ScrollToTop() {

    const { pathname } = useLocation();
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior:"instant",
      });
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/belfast" element={<Belfast />} />
        <Route path="/order" element={<OrderPage />} />

        </Routes>
    </Router>
  );
}

export default App;
