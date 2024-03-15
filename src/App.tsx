import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";

function App() {
  useEffect(() => {
    // Sending the custom event when the component mounts
    gtag('event', 'successful_sign_in', {
      'event_category': 'button',
      'event_label': 'dharamveersinghkhera@gmail.com',
      'value': 99
    });
  }, []);

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
function gtag(arg0: string, arg1: string, arg2: { event_category: string; event_label: string; value: number; }) {
  throw new Error("Function not implemented.");
}

