import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
function CheckoutProduct({ id, image, title, price, rating, hidebutton }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={image}
        alt="checkoutProduct"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hidebutton && (
          <button className="checkoutProduct_button" onClick={removeFromBasket}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
