import "./Clase6.css";
import products from './products.json'
import Producto from "./Producto";
import accounts from './accounts.json'
import users from './users.json'
import Usuario from "./Usuario";
function Clase6() {
  
  return (
    <>
    <div className="flex">
    {products.map((product) => {
      return (
        <Producto key={product.id}
        {...product}
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
    </>
  );
}
export default Clase6;
