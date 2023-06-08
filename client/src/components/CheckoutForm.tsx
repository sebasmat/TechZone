// import {PaymentElement} from '@stripe/react-stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();


  

  const createPayment = async () => {
    const { data } = await axios.post("http://localhost:3001/pay", { amount: 500, mode: 'no-cors' });
    confirmPayment(data.client_secret);
  }
  const confirmPayment = async (clientSecret: string) => {
    console.log(clientSecret);
    if (stripe) {
      const result = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement)!,
        }
      })
      console.log(result);
    }
  }

  return (
    <form>
      <CardElement />
      <button type='submit' onClick={createPayment}>Submit</button>
    </form>
  );
};

export default CheckoutForm;