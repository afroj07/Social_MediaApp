import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingPage from "./LoadingPage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const controller = new AbortController();
  const signal = controller.signal;
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });

    return () => {
      //console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingPage></LoadingPage>}
      {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
