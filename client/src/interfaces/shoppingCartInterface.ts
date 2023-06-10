import ProductInterface from "@/interfaces/productsInterface";

interface ShoppingCartInterface {
  product: ProductInterface | undefined;
  quantity: number;
}

export default ShoppingCartInterface;
