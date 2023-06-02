import ProductListingHome from "@/components/product-listing-home"; 
import data from "../data.json"
import Link from "next/link";
import ProductInterface from "@/interfaces/productsInterface";

export async function getStaticProps() {
  return {
    props: {
      pageId: "homePage",
    },
  };
}

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
    <ProductListingHome arrayProducts={arrayProducts}/>
  </div>)
}
