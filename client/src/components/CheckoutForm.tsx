// import {PaymentElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import ProductInterface from '@/interfaces/productsInterface';

const CheckoutForm = (props:ProductInterface) => {

  const createPayment = async ()=>{
    console.log("si entra al createpayment");
    const name = "PruebaProduct";
    // const precio = 80;
    const {data} = await axios.post("http://localhost:3001/pay/create-checkout-session", {name:name})
    window.location.href=data; 
    
  }
  // const stripe = useStripe();
  // const elements = useElements();
  // const createPayment = async () => {
  //   const { data } = await axios.post("http://localhost:3001/pay", { amount: 500, mode: 'no-cors' });
  //   confirmPayment(data.client_secret);
  // }
  // const confirmPayment = async (clientSecret: string) => {
  //   console.log(clientSecret);
  //   if (stripe) {
  //     const result = await stripe?.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements?.getElement(CardElement)!,
  //       }
  //     })
  //     console.log(result);
  //   }
  // }

  // return (
  //   <form>
  //     <CardElement />
  //     <button type='submit' onClick={createPayment}>Submit</button>
  //   </form>
  // );

  return (
    <div>
      <button role='link' onClick={createPayment}>Submit</button>
    </div>
  );
};

export default CheckoutForm;