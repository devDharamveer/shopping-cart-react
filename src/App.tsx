import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    const trackingID = 'G-J7NLMZ94BL'; // Replace with your actual Google Analytics tracking ID

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', trackingID);

    // Function to send email ID along with an event
    function sendEmailEvent(email: string) {
      gtag('event', 'email_capture', {
        'email': email,
        'event_category': 'user_interaction',
        'event_label': 'Email Capture'
      });
    }

    // Example usage: Call sendEmailEvent() when capturing an email
    const userEmail = 'dharamveersinghkhera@gmail.com'; // Replace with the actual email captured
    sendEmailEvent(userEmail);
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
