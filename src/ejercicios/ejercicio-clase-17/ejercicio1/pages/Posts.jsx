import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Post from "../components/Post";

export default function Posts() {
  const params = useParams();

  const [post, setPost] = useState("");
  async function handleFetch() {
    const data = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    ).json();
    console.log(data);
    setPost(data);
  }

  useEffect(() => {
    handleFetch();
  }, []);
  
  return (
    <>
      <Post {...post} enlace={<Link to={"../"}>Volver</Link>}/>
    </>
  );
}
