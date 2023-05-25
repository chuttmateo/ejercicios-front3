/* eslint-disable react/prop-types */
function Producto(props) {
    
    return(
        <div className="producto">
            <h2>{props.product.nombre}</h2>
            <p>{props.product.descripcion}</p>
            <p>{props.product.precio}</p>
            <button onClick={()=>{ props.onAddToCart(props.product)}}>agregar al chango</button>
        </div>
    )
}
export default Producto