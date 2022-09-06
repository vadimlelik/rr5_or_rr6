import React, { useEffect } from "react";
// Librares
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
// Components
import BackgroundGradiend from "../components/BackgroundGradient";
import ScreenWidthWrapper from "../components/ScreenWidthWrapper";
// Pages

//Store
import { getPosts } from "../store/postsSlice";

const PostsLayout = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const loadPostData = () => {
      dispatch(getPosts());
    };
    loadPostData();
  }, [dispatch]);

  return (
    <>
      <BackgroundGradiend />
      <ScreenWidthWrapper>
        <Outlet />
      </ScreenWidthWrapper>
    </>
  );
};

export default PostsLayout;
