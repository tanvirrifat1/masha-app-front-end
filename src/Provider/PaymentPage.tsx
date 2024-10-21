// src/PaymentPage.tsx
import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  useEffect(() => {
    // Fetch the clientSecret from the backend
    const fetchPaymentIntent = async () => {
      const response = await axios.post(
        `http://localhost:5000/api/v1/discount/671338a5dd8937ccdc30d580/payment`,
        {
          email: "JWjZl@example.com",
        }
      );
      setClientSecret(response.data.data.clientSecret); // Assuming the backend returns it as 'data.clientSecret'
    };

    fetchPaymentIntent();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement!,
        },
      }
    );

    if (error) {
      setError(error.message || "An error occurred");
      setLoading(false);
    } else if (paymentIntent) {
      setSucceeded(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Discount Club Payment</h2>
      {error && <p>{error}</p>}
      {succeeded ? (
        <p>Payment successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={loading || !stripe}>
            {loading ? "Processing..." : "Pay"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
