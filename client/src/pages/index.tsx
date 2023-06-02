import ProductListingHome from "@/components/product-listing-home"; 
import data from "../data.json"
import Link from "next/link";
import ProductInterface from "@/interfaces/productsInterface";
import Carrousel from "@/components/Carrousel";
import Image from "next/image";

export async function getStaticProps() {
  return {
    props: {
      pageId: "homePage",
    },
  };
}

const images = [
  'https://i.ibb.co/6PQ3H8Y/carrusel5.png',
  'https://i.ibb.co/MZ0CBPN/carrusel3.jpg',
  'https://i.ibb.co/MsZdwqV/carrusel6.png',
  'https://i.ibb.co/hY91G8W/carrusel2.jpg'
]

export default function Home() {

  let dataProducts = data as ProductInterface[];
  let arrayProducts: ProductInterface[] = []
  let i: number = 0
  while(dataProducts.length > i && arrayProducts.length < 9){
    arrayProducts.push(dataProducts[i])
    i = i+5
  }

  return (<div className="flex flex-col items-center ">
    <Link href="/products">
      <button className="bg-violet-900 rounded-xl	py-1 px-2 text-white hover:bg-violet-700 duration-300">Ver todos los productos</button>
    </Link>
    <div className=" w-[1000px] h-[400] mx-auto my-0 ">
      <Carrousel loop >
        {images.map((src, i) => {
          return (
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              <Image src={src} fill className="w-[1000px] w-[450px]" alt="alt" />
            </div>
          );
        })}
      </Carrousel>
    </div>
    <ProductListingHome arrayProducts={arrayProducts}/>
  </div>)
}
