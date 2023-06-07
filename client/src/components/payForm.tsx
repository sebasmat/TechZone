import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";

const PayForm = ()=>{

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event: React.FormEvent)=>{
        event.preventDefault();
        // const result = await stripe?.createPaymentMethod({
        //     type:"card",
        //     card: elements?.getElement(CardElement)!,
        // })
        // console.log(result);
        

        const {data} = await axios.post('http://localhost:3001/pay',{
            amount: 500, // aqui iria el precio del producto en centavos o seria price * 100
            description: "esto es una descripción de prueba",
        });
        console.log(data);
        // confirmPayment(data.client_secret);
    }
    const confirmPayment = async (paymentIntentClientSecret: string)=>{
        console.log(paymentIntentClientSecret);
        
        if(stripe){
            // const {token} = await stripe.createToken(elements?.getElement(CardElement)!)
            const result = await stripe?.confirmCardPayment(paymentIntentClientSecret,{
                payment_method: {
                    card: elements?.getElement(CardElement)!,
                    billing_details:{
                        name: "Nombre del cliente", 
                        email: "prueba@gmail.com"
                    }
                }
            })
            console.log(result);
            // console.log(token);
        }       
    }
    return (
        <form onSubmit={ handleSubmit} className="max-w-400 max-h-400">
            <CardElement/>
            <button>Enviar</button>
        </form>
    )
}
export default PayForm;