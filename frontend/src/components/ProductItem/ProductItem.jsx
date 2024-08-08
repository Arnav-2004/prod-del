import React, { useContext } from "react";
import "./ProductItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function ProductItem({ id, name, price, desc, img }) {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="product-item">
      <div className="product-item-img-container">
        <img
          src={url + "/images/" + img}
          alt={name}
          className="product-item-image"
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add_icon_white"
          />
        ) : (
          <div className="product-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove_icon_red"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add_icon_green"
            />
          </div>
        )}
      </div>

      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating_starts" />
        </div>
        <p className="product-item-desc">{desc}</p>
        <p className="product-item-price">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
