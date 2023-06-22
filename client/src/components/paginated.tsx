import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/actionCreators/getProducts";
import { useTypedSelector } from "@/store/useTypeSelector";
import { getSearchs } from "@/store/actionCreators/getSearch";

const Paginated = () => {
  const [page, setPage] = useState(0);
  //const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  // const findPageNumber = async () => {
  //   const response = await axios
  //     .get("https://tech-zone-api-n786.onrender.com/products")
  //     .then((data) => setTotalPages(data.data.totalPages));
  // };

  // useEffect(() => {
  //   findPageNumber();
  // });

  const totalPages = useTypedSelector((state) => state.products.totalPages);
  const origin = useTypedSelector((state) => state.products.origin);

  const arrayButton: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    arrayButton.push(i);
  }

  const handlePaginatedButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (origin[0] == "all") {
      const actualPage = parseInt(event.currentTarget.value);
      setPage(actualPage);

      dispatch(getProducts(actualPage, null, null, null));

      dispatch(getProducts(actualPage, null, null, null));
    }
    if (origin[0] == "name") {
      const actualPage = parseInt(event.currentTarget.value) + 1;
      setPage(actualPage);
      dispatch(getSearchs(origin[1], actualPage));
    }
    if (origin[0] == "brand") {
      const actualPage = parseInt(event.currentTarget.value);
      setPage(actualPage);
      dispatch(getProducts(actualPage, null, origin[1], null));
    }
    if (origin[1] == "maxPrice") {
      const actualPage = parseInt(event.currentTarget.value);
      setPage(actualPage);
      dispatch(getProducts(actualPage, null, null, origin[3]));
    }
  };

  // const handleNextBackButton = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   if (event.currentTarget.value == "next") {
  //     let nextPage = page + 1;
  //     setPage(nextPage);
  //     dispatch(getProducts(nextPage, null, null));
  //   }
  //   if (event.currentTarget.value == "back") {
  //     let nextPage = page - 1;
  //     setPage(nextPage);
  //     dispatch(getProducts(nextPage, null, null));
  //   }
  // };

  return (
    <div className=" flex justify-center h-14 ">
      {/* {page > 0 && (
        <button
          value="back"
          onClick={handleNextBackButton}
          className="bg-violet-900 m-3 px-2 text-xl rounded hover:bg-violet-400"
        >
          Anterior
        </button>
      )} */}
      {arrayButton.map((number, index) => {
        if (number) {
          return (
            <button
              key={index}
              value={number - 1}
              onClick={handlePaginatedButton}
              className="bg-violet-900 
                m-3 px-2 text-xl rounded focus:bg-violet-400 hover:bg-violet-400 text-white"
            >
              {number}
            </button>
          );
        }
        // else {
        //   return (
        //     <label className="m-3 px-2 py-1 text-xl rounded bg-violet-400">
        //       {page + 1}
        //     </label>
        //   );
        // }
      })}
      {/* {page < totalPages - 1 && (
        <button
          value="next"
          onClick={handleNextBackButton}
          className="bg-violet-900 m-3 px-2 text-xl rounded hover:bg-violet-400"
        >
          Siguiente
        </button>
      )} */}
    </div>
  );
};

export default Paginated;
