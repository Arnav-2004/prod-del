import React from "react";
import "./ExploreProduct.css";
import { product_list } from "../../assets/assets";

function ExploreProduct({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our collection</h1>
      <p className="explore-menu-text">
        Explore top-tier automotive solutions with our selection of Amaron
        batteries and Shell lubricants. Experience excellence in every drive and
        operation with our expert offerings.
      </p>
      <div className="explore-menu-list">
        {product_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.product_name ? "all" : item.product_name
                );
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.product_name ? "active" : ""}
                src={item.product_image}
                alt={`menu-img-${index + 1}`}
              />
              <p>{item.product_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
}

export default ExploreProduct;
