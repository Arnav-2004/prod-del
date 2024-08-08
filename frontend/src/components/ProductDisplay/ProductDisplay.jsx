import React, { useContext } from "react";
import "./ProductDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ProductItem from "../ProductItem/ProductItem";

function ProductDisplay({ category }) {
  const { product_list } = useContext(StoreContext);
  return (
    <div className="product-display" id="product-display">
      <h2>Top products we offer</h2>
      <div className="product-display-list">
        {product_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                desc={item.description}
                img={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProductDisplay;
