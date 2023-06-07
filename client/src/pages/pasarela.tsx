import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayForm from "@/components/payForm";


const stripe = loadStripe(`${process.env.PUBLIC_APIKEY}`);

const pasarela =()=>{
    return (
        <div className="max-w-400 max-h-400">esta es la vista para la pasarela
            <Elements stripe={stripe}>
                <PayForm />
            </Elements>
        </div>
    )
}

export default pasarela;