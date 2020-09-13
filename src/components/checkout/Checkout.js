import React, { forwardRef } from "react";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import FlipMove from "react-flip-move";

const FunctionalArticle = forwardRef(({ item }, ref) => (
  <div ref={ref}>
    <CheckoutProduct
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
    />
  </div>
));

const renderCheckoutProducts = (basket) => {
  return (
    <FlipMove easing="ease">
      {basket.map((item, i) => (
        <FunctionalArticle key={i} item={item} />
      ))}
    </FlipMove>
  );
};
//  leaveAnimation={customLeaveAnimation}
// const customLeaveAnimation = {
//   from: { transform: "scale(1, 1)" },
//   to: { transform: "scale(0.5, 1) translateY(-20px)" },
// };
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {renderCheckoutProducts(basket)}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
