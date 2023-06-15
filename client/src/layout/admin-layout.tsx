import Link from "next/link";

const AdminLayout = ({ children }: any) => {
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
