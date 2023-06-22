import React from "react";
import Link from "next/link";

const Userbloqued = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="flex flex-col h-screen justify-center items-center">
        <h1>Usuario bloqueado, por favor contacte al administrador</h1>
        <Link href={"/api/auth/logout"}>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Userbloqued;
