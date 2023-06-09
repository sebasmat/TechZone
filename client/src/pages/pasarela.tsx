import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import axios from "axios";

const stripe = loadStripe(`${process.env.PUBLIC_APIKEY}`);

const pasarela = () => {
    const createProduct = async () => {
        //la información de creación en stripe puede hacerse de una vez con todos los productos o los productos 
        const name = "Prueba2";
        const price = 80;
        const request = await axios.post('http://localhost:3001/pay', {name:name, precio:price});
        console.log(request);
      }
    
   
    return (
        <div className="max-w-400 max-h-400">esta es la vista para la pasarela
            <Elements stripe={stripe} >
                <CheckoutForm />
                <button onClick={createProduct}>Crear Producto</button>
            </Elements>
            
        </div>
    )
}

export default pasarela;