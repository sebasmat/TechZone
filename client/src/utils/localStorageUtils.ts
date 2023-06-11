import ShoppingCartInterface from "@/interfaces/shoppingCartInterface";
import ProductInterface from "@/interfaces/productsInterface";

export const manageCart = ({
  id,
  category,
  brand,
  name,
  images,
  description,
  price,
  available,
  stock,
}: ProductInterface) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const index = cart.findIndex(
    (item: ShoppingCartInterface) => item.product?.id === id
  );
  if (index === -1) {
    cart.push({
      product: {
        id,
        category,
        brand,
        name,
        images,
        description,
        price,
        available,
        stock,
      },
      quantity: 1,
    });
  } else {
    cart[index].quantity += 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCart = (id: number | undefined) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const index = cart.findIndex(
    (item: ShoppingCartInterface) => item.product?.id === id
  );
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const modifyCart = (id: number | undefined, quantity: number) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const index = cart.findIndex(
    (item: ShoppingCartInterface) => item.product?.id === id
  );
  cart[index].quantity = quantity;
  localStorage.setItem("cart", JSON.stringify(cart));
};
