import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router-dom";
//import { getBasketTotal } from "../../reducer";

export const getBasketTotal = (basket) => {
  return (
    parseFloat(
      basket
        .map((item) => item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toFixed(2)
    ).toLocaleString() || 0
  );
};

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const navigate = (e) => {
    user
      ? history.push("/payment")
      : window.confirm("Please Login before checking out")
      ? history.push("/login")
      : window.alert("Login is mandatory to proceed to checkout");
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({`${basket.length}`} items):
        <strong>Rs. {basket.length ? getBasketTotal(basket) : 0}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button className="subtotal_button" onClick={navigate}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
