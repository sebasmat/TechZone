// import {PaymentElement} from '@stripe/react-stripe-js';
import { useTypedSelector } from "@/store/useTypeSelector";
import axios from "axios";

const CheckoutForm = (props: any) => {
  const { UserFromDb } = useTypedSelector((state) => state.user);
  const createPayment = async () => {
    const estado: any = [];
    const array: any[] = props.state.products;
    array.forEach((obj: any) => {
      estado.push({
        name: obj.name,
        cantidad: obj.quantity,
        email: UserFromDb.email,
      });
    });

    const { data } = await axios.post(
      "http://localhost:3001/pay/create-checkout-session",
      { estado: estado }
    );

    console.log(data.sessionId);
    window.location.href = `${data.sessionURL}`;
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
        Submit To Pay Cart
      </button>
    </div>
  );
};

export default CheckoutForm;
