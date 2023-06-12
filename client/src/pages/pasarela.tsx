import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import axios from "axios";

const stripe = loadStripe(`${process.env.PUBLIC_APIKEY}`);

const pasarela = () => {
    const createProduct = async () => {
        //aqui iria la información del o los productos, especialmente el nombre 
        //la información de creación en stripe puede hacerse de una vez con todos los productos o los productos 
        const {data} = await axios.get('http://localhost:3001/products/1');
        const name = "PruebaProduct";
        const price = 100;
        const descripcion = "esta es la descripcion de PruebaProduct";
        const imagenes = data.images;
        const request = await axios.post('http://localhost:3001/pay', {
            name:name, 
            precio:price,
            descripcion: descripcion,
            imagenes: imagenes
        });
        console.log(request);
      }

    return (
        <div className="max-w-400 max-h-400">esta es la vista para la pasarela
            <Elements stripe={stripe} >
                <CheckoutForm id={0} category={""} brand={""} name={""} images={[]} description={""} price={0} available={true} stock={0}/>
                <button onClick={createProduct}>Crear Producto</button>
            </Elements>  
        </div>
    )
}

export default pasarela;