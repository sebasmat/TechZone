import ProductInterface from "@/interfaces/productsInterface";

interface ProductReducerInterface {
  ProductsFromDb: ProductInterface[],
  totalPages: number,
}

export default ProductReducerInterface;
