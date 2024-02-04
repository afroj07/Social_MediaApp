import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingPage from "./LoadingPage";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingPage></LoadingPage>}
      {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
