import "./Clase6.css";
import products from './products.json'
import Producto from "./Producto";
import accounts from './accounts.json'
import users from './users.json'
import Usuario from "./Usuario";
import { useState } from "react";

function Clase6() {
  const [chango, setChango] = useState([])
  function handleAgregar(product){
    setChango([...chango, product])
  }
  return (
    <>
    <h1> Productos en el chango: {chango.length}</h1>
    <div className="container">
    <div className="flex">
    {products.map((product) => {
      return (
        <Producto key={product.id}
        product = {{...product}}
        onAddToCart={handleAgregar}
        />
      )
    })}
    </div>
    <div className="flex">
    {accounts.map((account)=>{
      return(
        <li key={account.account} className="cuenta"><a href={`https://twitter.com/${account.account}`} target="_blank" rel="noopener noreferrer">{account.userName}</a></li>
      )
    })}
    </div>
    <div className="flex">
    {users.map((user)=>{
      return(
        <Usuario key={user.email}
        {...user}
        />
      )
    })}
    </div>
    </div>
    </>
  );
}
export default Clase6;
