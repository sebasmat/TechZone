import ProductListingHome from "@/components/product-listing-home";
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import ProductInterface from "@/interfaces/productsInterface";
import Carrousel from "@/components/Carrousel";
import Image from "next/image";
import { useTypedSelector } from "@/store/useTypeSelector";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/layout/main-layout";

export async function getStaticProps() {
  return {
    props: {
      pageId: "homePage",
    },
  };
}

const images = [
  "https://i.ibb.co/6PQ3H8Y/carrusel5.png",
  "https://i.ibb.co/MZ0CBPN/carrusel3.jpg",
  "https://i.ibb.co/MsZdwqV/carrusel6.png",
  "https://i.ibb.co/hY91G8W/carrusel2.jpg",
];

const Home: NextPageWithLayout = () => {
  const [arrayProducts, setArrayProducts] = useState([]);

  const result = async () => {
    let productsHome: ProductInterface[];
    await fetch("http://localhost:3001/homeproducts")
      .then((response) => response.json())
      .then((data) => setArrayProducts(data));
  };

  useEffect(() => {
    result();
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <div className=" w-[1000px] h-[400] mx-auto my-0 pt-8 -z-50">
        <Carrousel loop>
          {images.map((src, i) => {
            return (
              <div className="relative h-64 flex-[0_0_100%]" key={i}>
                <Image
                  src={src}
                  fill
                  className="w-[1000px] w-[450px]"
                  alt="alt"
                />
              </div>
            );
          })}
        </Carrousel>
      </div>
      <Link href="/products">
        <button className="bg-violet-900 rounded-xl	py-1 px-2 mt-8 text-white hover:bg-violet-700 duration-300">
          Ver todos los productos
        </button>
      </Link>
      <ProductListingHome arrayProducts={arrayProducts} />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
