import React from "react";
import Header from "./Header";
import Cart from "./Cart";
import Address from "./Address";
function Checkout() {
  return (
    <div className="c-main">
      <Header></Header>
      <div className="checkout-main">
        <div>
          <div className="checkout-container">
            <h5 className="margin-zero">Select delivery Address</h5>
            <p className="margin-zero">
              You have a saved address in this location
            </p>
            <div className="checkout-address">
              <Address
              headName="Home"
              address="1E, Ganganagar, Muthu Nagar, Narasimhanaickenpalayam, Tamil Nadu 641031, India"
              time="29 mins"
              button="DELIVER HERE"
              ></Address>
              <Address className ="button-checkout-add"
              headName="Add New Address"
              address="1E, Ganganagar, Muthu Nagar, Narasimhanaickenpalayam, Tamil Nadu 641031, India"
              button="ADD NEW"></Address>
            </div>
          </div>
          <div className="checkout-payment">
            <p>Payment</p>
          </div>
        </div>

        <Cart></Cart>
      </div>
    </div>
  );
}

export default Checkout;
