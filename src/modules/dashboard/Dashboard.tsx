import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FoodItems } from "../../appInterface";
import { DataContext } from "../../context/DataProvider";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import ReactGA from 'react-ga';
import "./Dashboard.css";

function Dashboard() {
  const { topRated, allCategories, dishesNearYou } = useContext(DataContext);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);



  const navigate = useNavigate();

  const foodDetails = (item: FoodItems) => {
    ReactGA.event({
      category: item.name,
      action: "test action",
      label: "test label",
      value: item.price,
 })
    navigate("/food-details", { state: item });
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container mb-5">
          <h4 className="my-4 fw-600 d-blue">Top rated</h4>
          <div className="row">
            {topRated.map((items: FoodItems, idx: number) => (
              <div
                key={idx}
                className="col-md-4 pointer"
                onClick={() => foodDetails(items)}
              >
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h5 className="fw-600 black">{items.name}</h5>
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue">All Categories</h4>
          <div className="row">
            {allCategories.map((items: FoodItems, idx: number) => (
              <div
                key={idx}
                className="col-md-4 pointer"
                onClick={() => foodDetails(items)}
              >
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h5 className="fw-600 black">{items.name}</h5>
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue">Dishes Near You</h4>
          <div className="row">
            {dishesNearYou.map((items: FoodItems, idx: number) => (
              <div
                key={idx}
                className="col-md-4 pointer"
                onClick={() => foodDetails(items)}
              >
                <img
                  src={items.url}
                  width="300px"
                  height="300px"
                  style={{ borderRadius: 15 }}
                  alt="icon"
                />
                <h5 className="fw-600 black">{items.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;