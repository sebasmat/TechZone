import React, { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import AdminLayout from "@/layout/admin-layout";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/actionCreators/getProducts";
import { useTypedSelector } from "@/store/useTypeSelector";
import Paginated from "@/components/paginated";
import Image from "next/image";
import ProductForm from "@/components/product-form";
import axios from "axios";
import ProductInterface from "@/interfaces/productsInterface";
import { getDetails } from "@/store/actionCreators/getDetails";
import { useRouter } from "next/router";

const Products: NextPageWithLayout = () => {
  const { ProductsFromDb } = useTypedSelector((state) => state.products);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleAvailability = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const currentProduct = ProductsFromDb.find((product) => product.id === id);
    try {
      await axios.put("http://localhost:3001/update", {
        ...currentProduct,
        avalaible: !currentProduct?.avalaible,
      });
      dispatch(getProducts(0));
      alert("El producto se modifico con éxito");
    } catch (error) {
      alert(
        "No fue posible modificar el producto, por favor inténtelo más tarde"
      );
      console.log(error);
    }
  };

  function handleUpdateModal(
    e: React.MouseEvent,
    productUpdate: ProductInterface
  ) {
    e.stopPropagation();
    dispatch(getDetails(Number(productUpdate.id)));
    router.push("/updateProduct");
  }

  useEffect(() => {
    dispatch(getProducts(0));
  }, [dispatch]);

  return (
    <div className="px-16 py-10 mx-auto">
      {/* Open the modal using ID.showModal() method */}
      <button
        className="tz-btn tz-btn-primary"
        onClick={() => window.my_modal_1.showModal()}
      >
        Crear Nuevo Producto
      </button>
      <dialog id="my_modal_1" className="tz-modal">
        <form method="dialog" className="tz-modal-box">
          <ProductForm />
        </form>
        <form method="dialog" className="tz-modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {ProductsFromDb &&
        ProductsFromDb.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="tz-card tz-card-side bg-base-100 shadow-xl my-2 tz-card-bordered"
              >
                <figure
                  style={{
                    minHeight: "200px",
                    minWidth: "200px",
                    maxWidth: "200px",
                    maxHeight: "200px",
                  }}
                >
                  <Image
                    width={200}
                    height={200}
                    src={product.images[0]}
                    alt="Movie"
                    style={{
                      minHeight: "150px",
                      minWidth: "150px",
                      maxWidth: "150px",
                      maxHeight: "150px",
                    }}
                  />
                </figure>
                <div className="tz-card-body">
                  <h2 className="tz-card-title">{product.name}</h2>
                  <div className="tz-badge tz-badge-outline tz-badge-primary">
                    Categoria: {product.category}
                  </div>
                  <div className="tz-badge tz-badge-outline tz-badge-secondary">
                    Marca: {product.brand}
                  </div>
                  <div className="flex">
                    <div className="tz-badge tz-badge-outline">
                      Stock: {product.stock}
                    </div>
                    <div className="tz-badge tz-badge-outline">
                      Precio: {product.price}
                    </div>
                  </div>
                  <div className="tz-card-actions justify-end">
                    <button
                      onClick={(e) => handleUpdateModal(e, product)}
                      className="tz-btn tz-btn-primary"
                    >
                      Editar
                    </button>
                    <label className="tz-swap">
                      <input type="checkbox" checked={product.avalaible} />
                      <div
                        className="tz-swap-on tz-btn tz-btn-secondary"
                        id="a"
                        onClick={(e) => handleAvailability(e, product.id)}
                      >
                        Disponible
                      </div>
                      <div
                        className="tz-swap-off tz-btn tz-btn-secondary"
                        id="na"
                        onClick={(e) => handleAvailability(e, product.id)}
                      >
                        No Disponible
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      <Paginated />
    </div>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Products;
