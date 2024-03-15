import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    // Sending the custom event when the component mounts
    sendCustomEvent();
  }, []);

  function sendCustomEvent() {
    // Replace 'successful_sign_in', 'button', 'label', and 'this.authUserEmail@gmail.com' with your actual event details
    (window as any).gtag('event', 'successful_sign_in', {
      'event_category': 'button',
      'event_label': 'label',
      'value': 'Sign in with google',
      'email': 'this.authUserEmail@gmail.com' // Replace 'this.authUserEmail' with the actual user's email
    });
  }

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
