function App() {
  return (
    <div>
      {/* <PaymentProvider>
        <PaymentPage />
      </PaymentProvider> */}
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold ">Plans</h1>
      </div>

      <h1 className="text-3xl font-bold text-center my-6 ">Gold</h1>

      <div className="flex  flex-row justify-center text-2xl font-bold gap-3">
        <h2>Gold</h2>
        <h1>
          <b>$999/year</b>
        </h1>
        <h2>This is Gold Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_aEU28Af3W2qj25ibIP"
        >
          Subscribe to Gold
        </a>
      </div>

      <div className="flex  flex-row justify-center text-2xl font-bold gap-3">
        <h2>Gold</h2>
        <h1>
          <b>$699/6month</b>
        </h1>
        <h2>This is Gold Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_3cseVmf3W4yr25icMU"
        >
          Subscribe to Gold
        </a>
      </div>

      <div className="flex  flex-row justify-center text-2xl font-bold gap-3">
        <h2>Gold</h2>
        <h1>
          <b>$499/month</b>
        </h1>
        <h2>This is Gold Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_aEUeVm6xqaWPeS414d"
        >
          Subscribe to Gold
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center my-6 ">Silver</h1>

      <div className="flex  flex-row justify-center text-2xl font-bold gap-3 mt-4">
        <h2>Silver</h2>
        <h1>
          <b>$550/year</b>
        </h1>
        <h2>This is Silver Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_fZe9B2bRKaWP39mfZ4"
        >
          Subscribe to Silver
        </a>
      </div>
      <div className="flex  flex-row justify-center text-2xl font-bold gap-3 mt-4">
        <h2>Silver</h2>
        <h1>
          <b>$350/6month</b>
        </h1>
        <h2>This is Silver Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_28o5kM9JC2qjfW8004"
        >
          Subscribe to Silver
        </a>
      </div>
      <div className="flex  flex-row justify-center text-2xl font-bold gap-3 mt-4">
        <h2>Silver</h2>
        <h1>
          <b>$250/month</b>
        </h1>
        <h2>This is Silver Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_fZe7sU5tmd4X39mfZ3"
        >
          Subscribe to Silver
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center my-6 ">Discount</h1>

      <div className="flex  flex-row justify-center text-2xl font-bold gap-3 mt-4">
        <h2>Discount</h2>
        <h1>
          <b>$200/year</b>
        </h1>
        <h2>This is Discount Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_3csbJa1d6aWP6ly6op"
        >
          Subscribe to Discount
        </a>
      </div>
      <div className="flex  flex-row justify-center text-2xl font-bold gap-3 mt-4">
        <h2>Discount</h2>
        <h1>
          <b>$150/6month</b>
        </h1>
        <h2>This is Discount Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_4gwfZqaNG2qj39mdQS"
        >
          Subscribe to Discount
        </a>
      </div>
      <div className="flex  flex-row justify-center text-2xl font-bold gap-3 mt-4">
        <h2>Discount</h2>
        <h1>
          <b>$80/month</b>
        </h1>
        <h2>This is Discount Plan</h2>
        <a
          className="text-blue-500 underline"
          href="https://buy.stripe.com/test_fZecNe1d6gh9dO0cMP"
        >
          Subscribe to Discount
        </a>
      </div>

      {/*  */}
      {/* <Success />
      <Cancel /> */}
    </div>
  );
}

export default App;

// // http://localhost:5000/api/v1/subscribtion/subscribe?plan=silver

// import axios from "axios";

// function App() {
//   const handleSubscription = async (plan: any) => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/v1/subscribtion/subscribe",
//         {
//           params: { plan },
//         }
//       );
//       console.log(response);
//       // Redirect to the Stripe checkout URL
//       window.location.href = response.data.data.url; // Adjust this depending on your response structure
//     } catch (error) {
//       console.error("Error initiating subscription:", error);
//       alert("Failed to initiate subscription. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-center">
//         <h1 className="text-3xl font-bold ">Plans</h1>
//       </div>

//       <h1 className="text-3xl font-bold text-center my-6 ">Gold</h1>

//       <div className="flex flex-row justify-center text-2xl font-bold gap-3">
//         <h2>Gold</h2>
//         <h1>
//           <b>$999/year</b>
//         </h1>
//         <h2>This is Gold Plan</h2>
//         <button
//           onClick={() => handleSubscription("gold")}
//           className="text-blue-500 underline"
//         >
//           Subscribe to Gold
//         </button>
//       </div>

//       {/* Add similar structure for other plans... */}

//       <h1 className="text-3xl font-bold text-center my-6 ">Silver</h1>
//       <div className="flex flex-row justify-center text-2xl font-bold gap-3">
//         <h2>Silver</h2>
//         <h1>
//           <b>$550/year</b>
//         </h1>
//         <h2>This is Silver Plan</h2>
//         <button
//           onClick={() => handleSubscription("silver")}
//           className="text-blue-500 underline"
//         >
//           Subscribe to Silver
//         </button>
//       </div>

//       <h1 className="text-3xl font-bold text-center my-6 ">Discount</h1>
//       <div className="flex flex-row justify-center text-2xl font-bold gap-3">
//         <h2>Discount</h2>
//         <h1>
//           <b>$200/year</b>
//         </h1>
//         <h2>This is Discount Plan</h2>
//         <button
//           onClick={() => handleSubscription("discount")}
//           className="text-blue-500 underline"
//         >
//           Subscribe to Discount
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
