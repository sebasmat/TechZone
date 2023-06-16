import Link from "next/link";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useRouter } from "next/router";

const AdminLayout = ({ children }: any) => {
  const { user } = useUser();
  const { UserFromDb } = useTypedSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (
      user === undefined ||
      user === null ||
      user.email !== "techzone.imgbb@gmail.com" ||
      UserFromDb.email !== "techzone.imgbb@gmail.com"
    ) {
      router.push("/");
    }
  }, [user, UserFromDb]);

  return (
    <>
      <div className="tz-navbar shadow-md bg-violet-900 text-white">
        <div className="tz-navbar-start">
          <div>
            <img
              alt="brand_logo"
              src="https://i.ibb.co/R6yKw82/7.png"
              className="pb-1 w-17 h-14"
            />
          </div>
        </div>
        <div className="tz-navbar-center">
          <div className="flex">
            <Link href={"/admin/products"} className="tz-btn tz-btn-ghost">
              Productos
            </Link>
            <Link href={"/admin/users"} className="tz-btn tz-btn-ghost">
              Usuarios
            </Link>
            <Link href={"/"} className="tz-btn tz-btn-ghost">
              Home
            </Link>
          </div>
        </div>
        <div className="tz-navbar-end">
          <a className="tz-btn">Button</a>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
