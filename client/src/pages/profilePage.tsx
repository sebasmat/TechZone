import Link from "next/link";
import { useTypedSelector } from "@/store/useTypeSelector";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement, useEffect, useState } from "react";
import MainLayout from "@/layout/main-layout";
import Home from "@/pages/index";
import ProductListing from "@/components/product-listing";
import axios from "axios";
import ProductInterface from "@/interfaces/productsInterface";

const ProfilePage: NextPageWithLayout = () => {
  const { Error, UserFromDb } = useTypedSelector((state) => state.user);

  const [arrayProducts, setArrayproducts] = useState<ProductInterface[]>([])

  useEffect(() => {
    axios.get(`http://localhost:3001/sales/1`)
      .then((data) => {
        for (let i = 0; i < data.data[0].Products.length; i++) {
          const product = data.data[0].Products[i];
          const objProduct: ProductInterface = {
            id: product.id,
            name: product.name,
            category: product.category,
            brand: product.brand,
            images: product.images,
            description: product.description,
            price: product.price,
            avalaible: product.avalaible,
            stock: product.stock
          };
          let flag: boolean = true;
          for (let i = 0; i < arrayProducts.length; i++) {
            if (arrayProducts[i].id == product.id)
              flag = false;
          };
          if (flag == true) {
            setArrayproducts((prevArray => ([...prevArray, objProduct])))
          }
        }
      })
  }, [])

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
        <ProductListing arrayProducts={arrayProducts} />
      </div>
    </div>
  );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProfilePage;
