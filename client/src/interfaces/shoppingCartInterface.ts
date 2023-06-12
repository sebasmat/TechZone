import ProductInterface from "@/interfaces/productsInterface";
import UserInterface from "./userInterface";

interface ProductsWithQuantity extends ProductInterface {
  quantity?: number;
}

interface ShoppingCartInterface {
  products: ProductsWithQuantity[];
  user: UserInterface;
}

export default ShoppingCartInterface;
