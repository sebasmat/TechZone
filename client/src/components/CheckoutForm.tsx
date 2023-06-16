// import {PaymentElement} from '@stripe/react-stripe-js';
import axios from "axios";

const CheckoutForm = (props: any) => {
  const createPayment = async () => {
    const estado: any = [];
    const array: any[] = props.state.products;
    array.forEach((obj: any) => {
      estado.push({
        name: obj.name,
        cantidad: obj.quantity,
      });
    });
    const { data } = await axios.post(
      "http://localhost:3001/pay/create-checkout-session",
      { estado: estado }
    );
    window.location.href = data;
  };
  return (
    <div>
      <button
        className="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded"
        role="link"
        onClick={() => {
          createPayment();
        }}
      >
        {" "}
        Submit
      </button>
    </div>
  );
};

export default CheckoutForm;
