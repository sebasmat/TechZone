import React from "react";
import { NextPage } from "next";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useDispatch } from "react-redux";
import { getComments } from "@/store/actionCreators/getComments";
import { getPosts } from "@/store/actionCreators/getPosts";

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
  const {
    posts,
    loading: loadingPosts,
    error: errorPosts,
  } = useTypedSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleClickComments = async () => {
    await dispatch(getComments("1"));
  };

  const handleClickPosts = async () => {
    await dispatch(getPosts());
  };
  return (
    <>
      <div>
        this is favorites page
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {JSON.stringify(comments)}
        <button
          className="bg-amber-300 border-2 border-black"
          onClick={() => handleClickComments()}
        >
          test dispatch comments
        </button>
      </div>
      <div>
        {loadingPosts && <div>Loading...</div>}
        {errorPosts && <div>{errorPosts}</div>}
        {JSON.stringify(posts)}
        <button
          className="bg-amber-300 border-2 border-black"
          onClick={() => handleClickPosts()}
        >
          test dispatch posts
        </button>
      </div>
    </>
  );
};

export default Favorites;
