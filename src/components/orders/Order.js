import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../checkout/CheckoutProduct";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hidebutton
        />
      ))}
      <div>
        <h3 className="order_total">
          Order Total: Rs. {order.data.amount / 100}
        </h3>
      </div>
    </div>
  );
}

export default Order;
