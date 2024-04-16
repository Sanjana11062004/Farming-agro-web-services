import React from "react";
import playstore from "../assets/images/playstore.png";
import appstore from "../assets/images/appstore.png";
import logo from "../assets/images/logo.png";
function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-top">
        <div style={{ width: "38%" }}>
          <p className="footer-text">
            For better experience,download the Swiggy app now
          </p>
        </div>
        <div>
          <img src={playstore} className="footer-img"></img>
        </div>
        <div>
          <img src={appstore} className="footer-img"></img>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="grid-container">
          <div className="grid-item">
            <div className="grid-part1">
              <div>
                <img src={logo} width={40} height={40}></img>
              </div>
              <div className="grid-font">
                <p>Swiggy</p>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#fff",
                  marginLeft: "10px",
                  width: "50px",
                }}
              >
                {" "}
                © 2023 Bundl Technologies Pvt. Ltd
              </p>
            </div>
          </div>
          <div className="grid-item disply-items">
            <p className="foot-grid-head">Company</p>
            <p className="font-grid-content">About</p>
            <p className="font-grid-content">Careers</p>
            <p className="font-grid-content">Team</p>
            <p className="font-grid-content">Swiggy One</p>
            <p className="font-grid-content">Swiggy Instamart</p>
            <p className="font-grid-content">Swiggy Genie</p>
          </div>
          <div>
            <div className="grid-item">
              <p className="foot-grid-head">Contact us</p>
              <p className="font-grid-content">Help & Support</p>
              <p className="font-grid-content">Partner with us</p>
              <p className="font-grid-content">Ride with us</p>
            </div>
            <div className="grid-item">
              <p className="foot-grid-head">Legal</p>
              <p className="font-grid-content">Terms & Conditions</p>
              <p className="font-grid-content">Cookie Policy</p>
              <p className="font-grid-content">Privacy Policy</p>
            </div>
          </div>
          <div className="grid-item">
            <p className="foot-grid-head">We deliver to:</p>
            <p className="font-grid-content">Banglore</p>
            <p className="font-grid-content">Gurgaon</p>
            <p className="font-grid-content">Hyderabad</p>
            <p className="font-grid-content">Delhi</p>
            <p className="font-grid-content">Mumbai</p>
            <p className="font-grid-content">Pune</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
