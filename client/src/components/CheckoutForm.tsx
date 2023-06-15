// import {PaymentElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import ProductInterface from '@/interfaces/productsInterface';

const CheckoutForm = (props:any) => {
  const createPayment = async ()=>{
    const estado:any = [];
    const array:any[] = props.state.products;
    array.forEach((obj:any)=>{
      estado.push({
        name:obj.name,
        cantidad: obj.quantity,
      })
    })
    const {data} = await axios.post("http://localhost:3001/pay/create-checkout-session", {estado:estado})
    console.log(data.sessionId);
    window.location.href=`${data.sessionURL}`;
  }
  return (
    <div>
      <button role='link' onClick={()=>{createPayment();}}> Submit </button>
    </div>
  );
};

export default CheckoutForm;