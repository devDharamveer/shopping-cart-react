import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";
import ReactGA from "react-ga4";
import "bootstrap/dist/css/bootstrap.min.css";

ReactGA.initialize("G-J7NLMZ94BL", { testMode: true });
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});
ReactGA._toGtagOptions({
  testMode: true,
});

function App() {
  // Sending the custom event when the component mounts
  ReactGA.event({
    category: 'button',
    action: 'successful_sign_in-dharam@gmail.com',
    label: 'dharamveersinghkhera@gmail.com',
    value: 99,

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
