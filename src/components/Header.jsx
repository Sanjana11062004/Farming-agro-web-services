import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import dropdown from "../assets/images/dropdown.png";
import search from "../assets/images/search.png";
import discount from "../assets/images/discount.png";
import help from "../assets/images/help.png";
import user from "../assets/images/user.png";
import cart from "../assets/images/cart.png";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header({ cartCount }) {
  return (
    <div>
      
      <nav className="nav-bar ">
        <ul className="nav-items-left">
          <a className="nav-items-left-a" href="">
            <img className="logo" src={logo} width={50} height={70}></img>
          </a>
          <li className="nav-items">
            <a className="nav-items-left-a" href="">
              Orders
            </a>
          </li>
          <li className="nav-items-1">
            <a href="">Coimabtore,Tamilnadu,India</a>
          </li>
          <li className="nav-items-1">
            <a href="">
              <img className="arrow-down" src={dropdown}></img>
            </a>
          </li>
        </ul>
        <ul className="nav-items-right ">
          <li className="nav-items-2">
            <a className="nav-items-left-a a-color" href="">
              <div className="nav-items-right-container">
                <span>
                  <img className="image" src={search}></img>
                </span>
                <span>Search</span>
              </div>
            </a>
          </li>
          <li className="nav-items-2">
            <a className="nav-items-left-a a-color" href="">
              <div className="nav-items-right-container">
                <span>
                  <img className="image" src={discount}></img>
                </span>
                <span>
                  Offers<sup>NEW</sup>
                </span>
              </div>
            </a>
          </li>
          <li className="nav-items-2">
            <a className="nav-items-left-a a-color" href="">
              <div className="nav-items-right-container">
                <span>
                  <img className="image" src={help}></img>
                </span>
                <span>Help</span>
              </div>
            </a>
          </li>
          <li className="nav-items-2">
            <a className="nav-items-left-a a-color" href="">
              <div className="nav-items-right-container">
                <span>
                  <img className="image" src={user}></img>
                </span>
                <span>Profile</span>
              </div>
            </a>
          </li>
          <li className="nav-items-2">
            <Link to="/checkout" className="nav-items-left-a a-color">
              <div className="nav-items-right-container">
                <span>
                  <img className="image" src={cart}></img>
                </span>
                <span className="cart-cnt">{cartCount}</span>
                <span>Cart</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
