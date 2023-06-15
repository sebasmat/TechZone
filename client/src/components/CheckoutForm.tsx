// import {PaymentElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import ProductInterface from '@/interfaces/productsInterface';
import { useTypedSelector } from "@/store/useTypeSelector";

const CheckoutForm = (props:any) => {
  const { UserFromDb } = useTypedSelector((state) => state.user);
  const createPayment = async ()=>{
    const estado:any = [];
    const array:any[] = props.state.products;
    console.log(props.state.products)
    array.forEach((obj:any)=>{
      estado.push({
        name:obj.name,
        cantidad: obj.quantity,
        email:UserFromDb.email,
      })
    })
   
    const {data} = await axios.post("http://localhost:3001/pay/create-checkout-session", {estado:estado})
    window.location.href=data;
    console.log(estado.email)
  }
  return (
    <div>
      <button role='link' onClick={()=>{createPayment();}}> Submit </button>
    </div>
  );
};

export default CheckoutForm;