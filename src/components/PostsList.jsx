import React from "react";
import { usePostsQuery } from "../api";
import Post from "./Post";
import { useSelector } from "react-redux";
import PostSkeleton from "./PostSkeleton";

const PostsList = () => {
  const filter = useSelector((state) => state.filter);
  const { data: posts, isLoading, isError } = usePostsQuery(filter);

  if (isLoading) {
    return (
      <div>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching posts</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
