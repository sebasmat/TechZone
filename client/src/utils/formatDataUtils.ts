import FavoritesInterface from "@/interfaces/favoritesInterface";
import ShoppingCartInterface from "@/interfaces/shoppingCartInterface";

export const formatDataForFavorites = (data: any): FavoritesInterface => {
  return {
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      profileIMG: data.profileIMG,
      direction: data.direction,
      cellPhone: data.cellPhone,
      Gender: data.Gender,
    },
    products: data.Products.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        brand: item.brand,
        category: item.category,
        images: item.images,
        description: item.description,
        price: item.price,
        avalaible: item.avalaible,
        stock: item.stock,
        quantity: item.Cart.quantity,
      };
    }),
  };
};

export const formatDataForLocal = (data: any): ShoppingCartInterface => {
  return {
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      profileIMG: data.profileIMG,
      direction: data.direction,
      cellPhone: data.cellPhone,
      Gender: data.Gender,
    },
    products: data.Products.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        brand: item.brand,
        category: item.category,
        images: item.images,
        description: item.description,
        price: item.price,
        avalaible: item.avalaible,
        stock: item.stock,
        quantity: item.Cart.quantity,
      };
    }),
  };
};

