import { useEffect } from "react";

type Props = {
  products: [any];
  category: any;
  marca: any;
  price: any;
  setProductsFiltered: any;
};

export async function useFilterProducts({
  products,
  category,
  marca,
  price,
  setProductsFiltered,
}: Props) {
  useEffect(() => {
    setProductsFiltered(products);
    setProductsFiltered(
      products
        .filter((product: any) =>
          category !== "Todos" ? product.category === category : true
        )
        .filter((product: any) =>
          marca !== "Todos" ? product.marca === marca : true
        )
        .filter((product) =>
          price !== "" && price > 0 ? product.price <= price : true
        )
    );
  }, [category, marca, price, setProductsFiltered, products]);
}
