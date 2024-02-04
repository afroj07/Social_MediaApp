import React, { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { PostList } from "../store/Post-list-store";
const Post = ({ post }) => {
  //console.log(post);
  const { deletePost } = useContext(PostList);
  return (
    <div className="card postCard" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle  rounded-pill "
            onClick={() => deletePost(post.id)}
          >
            <FiDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        <div>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hastag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
