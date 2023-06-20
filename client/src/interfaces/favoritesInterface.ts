import ProductInterface from "@/interfaces/productsInterface";
import UserInterface from "./userInterface";
import { experimental_useOptimistic } from "react";

interface ProductInterfaceFav extends ProductInterface{

}
interface FavoritesInterface {
    products: ProductInterface[];
    user: UserInterface;
}

export default FavoritesInterface;