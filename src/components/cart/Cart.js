import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contextos/CartContext"
import './cart.css'
import ItemCart from "../itemCart/ItemCart"

const Cart = () => {

    const {productosAgregados, precioTotal, totalItems, clearAllItems} = useContext(CartContext)

    const limpiarCarrito = () => {
        clearAllItems()
    }

    return (
        <div>
            <h1 className="text-4xl">Carrito</h1>
            <div className="carrito">
                {productosAgregados.length !== 0 ? 
                (
                    <div className="items">
                        {productosAgregados.map((prod) => (
                            <ItemCart imgUrl={prod.imgUrl} nombreProd={prod.Nombre} tipoAnimal={prod.tipoAnimal} cantidad={prod.cantidad} precio={prod.Precio} key={prod.id} id={prod.id} />   
                        ))}
                        <button onClick={limpiarCarrito} className='px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full'>Quitar todos los productos</button>
                    </div>
                ):(
                    <div className="emptyCartText">
                        <h4>No tienes productos en el carrito</h4>
                        <Link to={'/'}><button className='m-1.5 px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full'>Ir a comprar</button></Link>
                    </div>
                )}
                <div className="cartInfo">
                    <h3 className="m-5">Informacion Carrito</h3>
                    <p className="m-1.5">Cantidad de prodctos en carrto: {totalItems}</p>
                    <p className="m-1.5">Precio total: ${precioTotal}</p>
                    {productosAgregados.length !== 0 && <Link to={'/formularioContacto'}><button className='px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full'>Comprar</button></Link>}
                </div>
            </div>
        </div>
    )
}

export default Cart