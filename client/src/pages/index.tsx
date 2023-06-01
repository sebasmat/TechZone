import ProductListing from "@/components/product-listing";
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
  while(dataProducts.length > i && arrayProducts.length < 8){
    arrayProducts.push(dataProducts[i])
    i = i+5
  }

  return (<div>
    <Link href="/products">
      <button>Ver todos los productos</button>
    </Link>
    <ProductListing arrayProducts={arrayProducts}/>
  </div>)
}
