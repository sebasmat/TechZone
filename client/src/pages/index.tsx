import ProductListing from "@/components/product-listing";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      pageId: "homePage",
    },
  };
}

export default function Home() {
  return <div></div>
}
