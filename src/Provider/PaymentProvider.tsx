// src/PaymentProvider.tsx

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51M5x5eLMVhw2FMhmC4uP9RlHq8Hta2xfm0MyHWKiRprFKhyzpSzk7knzhqiBUT48F26pn9BuYlO3ZWjYLdpH7wQ400eUX78BhG"
); // Replace with your Stripe public key

const PaymentProvider = ({ children }: any) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default PaymentProvider;
