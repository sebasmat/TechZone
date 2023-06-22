import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";
import axios from "axios";

const stripe = loadStripe(`${process.env.PUBLIC_APIKEY}`);

const pasarela = () => {
  const createProduct = async () => {
    //aqui iria la información del o los productos, especialmente el nombre
    //la información de creación en stripe puede hacerse de una vez con todos los productos o los productos
    //traer todos los productos
    //recorrerlos y tomar las props pertinentes
    //preparar el back para que reciba un array
    const { data } = await axios.get(
      "https://tech-zone-api-n786.onrender.com/products?page=4"
    );

    const productos: any[] | undefined = [];
    const allproducts = data.content;
    allproducts.forEach((product: any) => {
      productos.push({
        name: product.name,
        price: product.price,
        descripcion: product.description,
      });
    });
    console.log(allproducts);

    // const name = "PruebaProduct";
    // const price = 100;
    // const descripcion = "esta es la descripcion de PruebaProduct";
    // const imagenes = data.images;
    const request = await axios.post(
      "https://tech-zone-api-n786.onrender.com/pay",
      {
        arrayProducts: productos,
      }
    );
    console.log(request);
  };

  return (
    <div className="max-w-400 max-h-400">
      esta es la vista para la pasarela
      <Elements stripe={stripe}>
        <CheckoutForm
          id={0}
          category={""}
          brand={""}
          name={""}
          images={[]}
          description={""}
          price={0}
          available={true}
          stock={0}
        />
        <button onClick={createProduct}>Crear Producto</button>
      </Elements>
    </div>
  );
};

export default pasarela;
