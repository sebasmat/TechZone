import ProductListing from "@/components/product-listing";

export async function getStaticProps() {
  return {
    props: {
      pageId: "homePage",
    },
  };
}

export default function Home() {
  return (
    <>
      <ProductListing />
    </>
  );
}
