import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../components/Post";
import { Link } from "react-router-dom";

export default function Index() {
  const [posts, setPosts] = useState([]);
  async function handleFetch() {
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    console.log(data);
    setPosts(data);
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Post {...post} enlace={<Link to={`/posts/${post.id}`}>Ver Información</Link>}/>
          </div>
        );
      })}
    </>
  );
}
