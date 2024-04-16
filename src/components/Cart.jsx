import React, { useEffect, useState } from "react";
import dosa from "../assets/images/dosa.png";
import { Link } from "react-router-dom";
import discount from "../assets/images/discount.png";

function Cart({ name, price }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const storedDishes = JSON.parse(localStorage.getItem("dishes_ordered"));
    if (storedDishes) {
      const initializedDishes = storedDishes.map(dish => ({
        ...dish,
        quantity: dish.quantity || 1
      }));
      setDishes(initializedDishes);
    }
    
  }, []);

  const addItem = (id) => {
    const updatedDishes = [...dishes];
    if (updatedDishes[id].quantity >= 0 || updatedDishes[id].quantity === undefined) {
      updatedDishes[id].quantity = (updatedDishes[id].quantity || 0) + 1; // Initialize to 1 if undefined
      setDishes(updatedDishes);
      // Save updated cart data to localStorage
      localStorage.setItem("dishes_ordered", JSON.stringify(updatedDishes));
    }
  };
  
  const deleteItem = (id) => {
    const updatedDishes = [...dishes];
    const updatedDish = { ...updatedDishes[id], quantity: updatedDishes[id].quantity - 1 };
    updatedDishes[id] = updatedDish;
    if (updatedDishes[id].quantity === 0) {
      updatedDishes.splice(id, 1);
      setDishes(updatedDishes);
    }
    setDishes(updatedDishes);
    localStorage.setItem("dishes_ordered", JSON.stringify(updatedDishes.filter(dish => dish.quantity > 0)));

    
  };
  
  
  // const deleteItem = (id) => {
  //   const updatedDishes = [...dishes];
  //   if (updatedDishes[id].quantity > 0) {
  //     updatedDishes[id].quantity -= 1; // Decrement quantity of the item at index
  //     setDishes(updatedDishes);
  //     // Save updated cart data to localStorage
  //     localStorage.setItem("dishes_ordered", JSON.stringify(updatedDishes));

  //   }
  //   if (updatedDishes[id].quantity === 0) {
  //     updatedDishes.splice(id, 1);
  //     setDishes(updatedDishes);
  //   }

  // };


  // Calculate total price of items in the cart
  const totalPrice = dishes.reduce((acc, dish) => acc + (dish.quantity * dish.price), 0);

  return (
    <div className="cart-main">
      <div className="cart-main-res">
        <div className="flexx color cart-padding">
          <div className="">
            <img
              className="dishes-image"
              src={dosa}
              alt="dish-image"
              width={52}
              height={56}
            ></img>
          </div>
          <div className="col">
            <div className="dishes-items">
              <p>Restaurant name</p>
            </div>
            <div className="dishes-items-price">
              <p>Place</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll">
        
        {dishes.map((di, index) => (
          <div className="cart-items" key={index}>
            <p>{di.name}</p>
            <div className="btn-add-rem">
              <button onClick={()=>deleteItem(index)}>-</button>
              <p>{di.quantity}</p>
              <button onClick={()=>addItem(index)}>+</button>
            </div>
            <div>
              <p>{di.price}</p>
            </div>
          </div>
        ))}

        <hr></hr>
        <div className=" div2">
          <textarea placeholder="Any suggestions? We will pass it on..."></textarea>
          <div className="cart-checkbox">
            <input type="checkbox"></input>
            <div className="cart-check-desc">
              <h6>Opt in for No-contact Delivery</h6>
              <p>
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </p>
            </div>
          </div>
          <div className="cart-coupon">
            <span>
              <img src={discount} width={20} height={20}></img>
            </span>
            <span>
              <p>Apply Coupon</p>
            </span>
          </div>
          <p>Bill Details</p>
          <div>
            <div className="cart-bill">
              <p>Item total</p>
              <p>Rs.123</p>
            </div>
            <div className="cart-bill">
              <p>Delivery partner fee</p>
              <p>Rs.23</p>
            </div>
            <hr></hr>
            <div className="cart-bill">
              <p>Delivery Tip</p>
              <p>Rs.30</p>
            </div>
            <div className="cart-bill">
              <p>Platform fee</p>
              <p>Rs.4</p>
            </div>
            <div className="cart-bill">
              <p>GST and Restaurant Charges</p>
              <p>23.72</p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="cart-bill tpay">
        <p>TO PAY</p>
        <p>{totalPrice+4+30+23+123+23.72}</p>
      </div>
    </div>
  );
}



export default Cart;