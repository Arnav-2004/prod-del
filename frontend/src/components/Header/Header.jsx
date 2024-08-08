import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Buy trusted products here</h2>
        <p>
          Explore top-tier automotive solutions with our selection of Amaron
          batteries and Shell lubricants. As a trusted retailer, we are
          dedicated to providing you with reliable power and outstanding
          protection for your vehicles. Enhance performance and longevity with
          our high-quality products, tailored to meet your every need.
        </p>
        <a href="#explore-menu">
          <button>View Products</button>
        </a>
      </div>
    </div>
  );
}

export default Header;
