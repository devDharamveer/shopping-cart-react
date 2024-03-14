import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";
import ReactGA from "react-ga4";
import "bootstrap/dist/css/bootstrap.min.css";

ReactGA.initialize("G-J7NLMZ94BL");

function App() {
  const location = useLocation();

  useEffect(() => {
    const userEmail = getUserEmail();
    if (userEmail) {
      ReactGA.send({
        hitType: "event",
        category: "user",
        action: "login",
        label: userEmail,
      });
    }
  }, [location]);

  const getUserEmail = () => {
    // Implement your logic to retrieve the user's email here
    // For demonstration purposes, let's assume the user's email is stored in localStorage
    return localStorage.getItem("userEmail");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/food-details" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
