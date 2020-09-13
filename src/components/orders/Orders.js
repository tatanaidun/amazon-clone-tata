import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  //console.log(user);
  useEffect(() => {
    user
      ? db
          .collection("users")
          .doc(user?.uid)
          .collection("orders")
          .orderBy("created", "desc")
          .onSnapshot((snapshot) =>
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          )
      : setOrders([]);
  }, [user]);

  //console.log(orders);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
