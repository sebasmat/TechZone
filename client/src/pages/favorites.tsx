import React from "react";
import { NextPage } from "next";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useDispatch } from "react-redux";
import { getComments } from "@/store/actionCreators/getComments";

export async function getStaticProps() {
  return {
    props: {
      pageId: "favoritesPage",
    },
  };
}

const Favorites: NextPage = () => {
  //example
  const { comments, loading, error } = useTypedSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();

  const handleClick = async () => {
    // @ts-ignore
    await dispatch(getComments("1"));
  };
  return (
    <div>
      this is favorites page
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {JSON.stringify(comments)}
      <button
        className="bg-amber-300 border-2 border-black"
        onClick={() => handleClick()}
      >
        test dispatch
      </button>
    </div>
  );
};

export default Favorites;
