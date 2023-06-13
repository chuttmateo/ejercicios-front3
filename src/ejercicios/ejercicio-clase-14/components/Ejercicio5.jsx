import { useEffect } from "react";
import { useState } from "react";
import Ejercicio5Form from "./Ejercicio5Form";

export default function Ejercicio5() {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState("");

  async function handlefetch() {
    setLoading(true);
    try {
      const response = await (
        await fetch("https://jsonplaceholder.typicode.com/posts")
      ).json();
      setPosts(
        response.map((post) => {
          return { id: post.id, body: post.body, title: post.title };
        })
      );
      setErr(null);
    } catch (error) {
      setErr(error);
    }
    setLoading(false);
  }

  async function handleSubmit(objeto) {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: objeto.title,
          body: objeto.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    ).json();
    console.log(response);
  }

  useEffect(() => {
    handlefetch();
  }, []);

  return (
   <>
      <h1>Ejercicio 5</h1>
      {loading ? <p>Loading...</p> : <Ejercicio5Form onSubmit={handleSubmit} />}
      {err && <p>Hubo un error con la obtención de los datos desde la api</p>}
      {posts && (
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      )}
   </>
  );
}
