import { useState } from 'react';



function Checkout(){
    return(
        <CheckoutForm/>
    )
}



function CheckoutForm() {
  // const [errorMessage, setErrorMessage] = useState('');
  // const stripe = useStripe();
  // const elements = useElements();

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardElement);

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: cardElement,
  //   });

  //   if (error) {
  //     setErrorMessage(error.message);
  //   } else {
  //     // Send the paymentMethod.id to your server to process the payment
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Card details
    //     <CardElement />
    //   </label>
    //   <div role="alert">{errorMessage}</div>
    //   <button type="submit" disabled={!stripe}>
    //     Pay
    //   </button>
    // </form>
    <></>
  );
}

export default Checkout;
