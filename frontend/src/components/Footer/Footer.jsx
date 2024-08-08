import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            style={{ width: "120px", margin: "-30px" }}
            src={assets.logo}
            alt="logo"
          />
          <p>
            As a trusted retailer, we are dedicated to providing you with
            reliable power and outstanding protection for your vehicles.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook_icon" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-923-481-1111</li>
            <li>laxmilube@hotmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; LAXMI LUBE PRIVATE LIMITED - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
