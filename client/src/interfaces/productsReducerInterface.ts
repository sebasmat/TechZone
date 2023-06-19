import ProductInterface from "@/interfaces/productsInterface";

interface ProductReducerInterface {
  ProductsFromDb: ProductInterface[],
  totalPages: number,
  origin: string[],
}

export default ProductReducerInterface;
