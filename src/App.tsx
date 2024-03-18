import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";

function App() {
  useEffect(() => {
    // Function to send the Google Analytics event
    const sendGoogleAnalyticsEvent = () => {
      (window as any).gtag('event', 'successful_sign_in', {
        'event_category': 'button',
        'event_label': 'Sign in with google',
        'value': 1, // Or any other numerical value associated with the event
        'email': 'dharamveersinghkhera@gmail.com' // Replace with actual email
      });
    }

    // Call the function when the component mounts
    sendGoogleAnalyticsEvent();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

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
