import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FoodItems } from "../../appInterface";
import { DataContext } from "../../context/DataProvider";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import "./Dashboard.css";

// Declare gtag function globally
declare global {
  interface Window {
    gtag: any; // Adjust the type as needed
  }
}

function Dashboard() {
  const { topRated, allCategories, dishesNearYou } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize gtag with your Measurement ID
    window.gtag("config", "G-J7NLMZ94BL", { testMode: true });
  }, []);

  const foodDetails = (category: string, item: FoodItems) => {
    // Send event to Google Analytics
    window.gtag("event", "food_details_click", {
      event_category: category,
      event_label: item.name,
    });
    navigate("/food-details", { state: item });
  };

  return (
    <div className="wrapper">
      {/* Rest of your component code */}
    </div>
  );
}

export default Dashboard;
