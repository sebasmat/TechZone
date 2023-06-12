import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "@/store/actionCreators/getUser";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useRouter } from "next/router";
import axios from "axios";

type Props = {};

const LoginLogout = ({}: Props) => {
  const { error, isLoading, user } = useUser();
  const { Error, UserFromDb } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (user !== undefined && error === undefined) {
      dispatch(getUser(user.email || ""));
    }
  }, [user]);

  useEffect(() => {
    if (Error !== undefined) {
      router.push("/user");
    }
  }, [Error]);

  const handleCartPostItems = async () => {
    try {
      const localData = JSON.parse(localStorage.getItem("cart") || "[]");
      const formatData = localData.map((item: any) => {
        return {
          userId: UserFromDb.id,
          productId: item.product.id,
          quantity: item.quantity,
        };
      });
      // console.log("this is format data", formatData);

      const dataConsole = await axios.post("http://localhost:3001/cart", {
        cartItems: formatData,
      });
      // console.log(dataConsole.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (UserFromDb.name !== undefined) {
      console.log("desde logincomponent sgiendo userfromdb");
      if (JSON.parse(localStorage.getItem("cart") || "[]").length > 0) {
        // console.log(JSON.parse(localStorage.getItem("cart") || "[]"));
        handleCartPostItems();
      }
    }
  }, [UserFromDb]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {!user && (
        <Link href={"/api/auth/login"}>
          <button>
            <div>
              <svg
                className="h-8 w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </button>
          <h5>Login</h5>
        </Link>
      )}

      {user && (
        <Link href={"/api/auth/logout"}>
          <button>
            <div>
              <svg
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </button>
          <h5>Logout</h5>
        </Link>
      )}
    </div>
  );
};

export default LoginLogout;
