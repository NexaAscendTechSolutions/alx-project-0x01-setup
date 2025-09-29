import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  const posts = [
    { title: "Post One", description: "This is the first post" },
    { title: "Post Two", description: "This is the second post" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
