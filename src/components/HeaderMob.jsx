import React from "react";
import logo from "../assets/images/logo.png";
import dropdown from "../assets/images/dropdown.png";
import search from "../assets/images/search.png";

function HeaderMob() {
  return (
    <div className="header-mob">
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
        </ul>
      </nav>
    </div>
  );
}
export default HeaderMob;
