import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import './itemDetails.css';
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from "../../contextos/CartContext";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetails = () => {

    const [producto, setProducto] = useState({})
    const [contador, setContador] = useState(0)
    const [error, setError] = useState('')
    const {id} = useParams()
    const {addItemToCartList} = useContext(CartContext)

    useEffect(() => {
        const db = getFirestore()
        const itemFromId = doc(db, 'productos', id)
        getDoc(itemFromId).then((snapshot) => {
            if(snapshot.exists()){
                setProducto({id: snapshot.id, ...snapshot.data()})
            } else {
                setError('Este producto no existe')
            }})
    },[id])

    const addCounterState = (ev) => {
        setContador(ev)
    }

    const buttonClickHandler = () => {
        const productoACarrito = {...producto, cantidad:contador}
        addItemToCartList(productoACarrito)
    }

    return (
        <div className="itemsDetails">
            { error !== '' ? (
                <div>
                    <p>{error}</p>
                </div>
            ):(
                <div className="contenedor">
                    <div className="imgDetails">
                        <img src={producto.imgUrl} className='mx-auto' alt='Imagen Producto' />
                    </div>
                    <div className="infoDetails">
                        <h3 className="text-2xl">{producto.Nombre}</h3>
                        <p className="m-2">{producto.Descripcion}</p>
                        <p className="m-2">Stock: {producto.Stock}</p>
                        <p className="m-2">${producto.Precio}</p>
                        <p className="m-2">Cantidad seleccionada: {contador}</p>
                        {contador === 0 ? <ItemCount className='m-2' stock={producto.stock} onAdd={addCounterState}/> : <Link to={'/Cart'}><button className="my-1.5 px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full" onClick={buttonClickHandler}>Finalizar compra</button></Link>}
                    </div>
            </div>
            )}
        </div>
    )
}

export default ItemDetails