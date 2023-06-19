import Link from "next/link";
import { useTypedSelector } from "@/store/useTypeSelector";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import MainLayout from "@/layout/main-layout";
import Home from "@/pages/index";

const ProfilePage: NextPageWithLayout = () => {
  const { Error, UserFromDb } = useTypedSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center py-10">
        <h1 className="text-3xl">{UserFromDb.name}</h1>
        <img
          className="w-[300px] h-[300px] rounded-full p-5"
          src={UserFromDb.profileIMG}
        />
        <h1>Teléfono: {UserFromDb.cellPhone}</h1>
        <h1>Dirección: {UserFromDb.direction}</h1>
      </div>

      <div className="flex gap-2">
        <Link href={"/user"}>
          <button className="bg-violet-400 font-white px-3 py-1 rounded-xl hover:bg-violet-600 duration-300">
            Editar perfil
          </button>
        </Link>
        {/*  TODO: Email change for testing | email original: techzone.imgbb@gmail.com */}
        {UserFromDb.email === "admin@admin.com" && (
          <Link href={"/admin/products"}>
            <button className="bg-violet-400 font-white px-3 py-1 rounded-xl hover:bg-violet-600 duration-300">
              Panel de Administracion
            </button>
          </Link>
        )}
      </div>
      <div>
        <h1 className="p-10">
          Acá se renderizan las cards de los productos que ha comprado
        </h1>
      </div>
    </div>
  );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProfilePage;
