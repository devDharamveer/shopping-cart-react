import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";
import ReactGA from "react-ga4";
import "bootstrap/dist/css/bootstrap.min.css";

ReactGA.initialize("G-J7NLMZ94BL");

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Here, you would implement your custom authentication logic
    // For demonstration purposes, let's assume you have a function `getUserEmail` that retrieves the user's email
    const userEmail = getUserEmail();
    if (userEmail) {
      ReactGA.send({
        hitType: "event",
        category: "user",
        action: "login",
        label: userEmail,
      });
      setUserEmail(userEmail);
    }
  }, []);

  // Function to simulate retrieving user's email (replace with your custom logic)
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
