import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";
import ReactGA from "react-ga4";
import "bootstrap/dist/css/bootstrap.min.css";

ReactGA.initialize("G-J7NLMZ94BL");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

function App() {
  // Sending the custom event when the component mounts
  ReactGA.event({
    category: 'button',
    action: 'successful_sign_in',
    label: 'label',
  }, {
    email: 'this.authUserEmail' // Replace 'this.authUserEmail' with the actual user's email
  });

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
