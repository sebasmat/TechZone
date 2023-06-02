import ProductListing from "@/components/product-listing";
import Link from "next/link";
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
  return (
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
  );
}
