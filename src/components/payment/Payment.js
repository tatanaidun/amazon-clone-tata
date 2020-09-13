import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../subtotal/Subtotal";
import axios from "axios";
import { db } from "../../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();
  // const baseURL = "http://localhost:5001/clone-tata-9b4e4/us-central1/api";
  const baseURL = "https://us-central1-clone-tata-9b4e4.cloudfunctions.net/api";
  useEffect(() => {
    const getClientSecret = async () => {
      const number =
        parseFloat(getBasketTotal(basket).split(".")[0].replace(/,/g, "")) +
        parseInt(getBasketTotal(basket).split(".")[1]) / 100;
      //stripe expects the total in a currencies in subunits
      await axios
        .post(baseURL + `/payments/create?total=${number * 100}`)
        .then((response) => {
          setClientSecret(response.data.clientSecret);
        });
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    //stripe work
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        //console.log(paymentIntent);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    //Listen for changes in cardElements
    //and display any erros as the customer types thier card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>India</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe magic call */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <h3>Order Total: Rs. {getBasketTotal(basket)}</h3>
                <button
                  className="payment_details_button"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : <p>Buy Now</p>}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
