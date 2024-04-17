import React from "react";
import Dishes from "./Dishes";
import "../styles/style.css";
import Header from "./Header";
import veg from "../assets/images/veg.png";
import Home from "./Home";
import dropdownblack from "../assets/images/dropdownblack.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dishesdata from "../json/dishesdata.json";
import Cart from "./Cart";

function Dish() {
  const [dis, setDis] = useState([]);

  useEffect(() => {
    setDis(dishesdata);
  }, []);

  const [cartCount, setCartCount] = useState(0);
  const addToCart = (name, price) => {
    setCartCount(cartCount + 1);

    const existingDishes =
      JSON.parse(localStorage.getItem("dishes_ordered")) || [];
    const dish = { name: name, price: price };

    // Add the new dish to existing dishes
    const updatedDishes = [...existingDishes, dish];

    // Update local storage with the updated list of dishes
    localStorage.setItem("dishes_ordered", JSON.stringify(updatedDishes));

    // localStorage.setItem(cartCount);

    console.log({ name });
    console.log({ price });
  };
  return (
    <div>
      <Header cartCount={cartCount} />
      <div className="dish-main">
        <div className="dish-main-head">
          <span>
            <a>Home /</a>
          </span>
          <span>
            <a> Coimbatore / </a>
          </span>
          <span>
            <p> Wok Asian </p>
          </span>
        </div>
        <div className="flexx">
          <div className="col">
            <p className="res-name">Ruchi Culture</p>
            <p className="margin-zero">South Indian </p>
            <p className="margin-zero">Pollachi 1.2 km</p>
          </div>
          <div className="rating-main">
            <div className="ratings">
              <div>
                <i></i>
                <p>4.5</p>
              </div>
              <hr className="ratings-hr"></hr>
              <div>
                <p className="rating-font">20+ ratings</p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flexx">
          <button className="dropbtn">Recommendations</button>
          <img src={dropdownblack} alt="dropdown" width={18} height={18}></img>
        </div>

        <div className="dish-main-item">
          <Dishes addToCart={addToCart}></Dishes>
        </div>
        <div className="view-cart">
          <p>{cartCount} items added</p>
          <Link to="/checkout" className="view-cart-button">
            <p>VIEW CART</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dish;
