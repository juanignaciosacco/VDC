import './itemCount.css'
import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
const [count, setCount] = useState(0)


const moreItems = () => {
  count >= stock ? alert('No quedan mas productos en stock') : setCount(count + 1)
}

const lessItems = () => {
    count <= 0 ? alert('Tines que agregar productos para poder quitar!') : setCount(count - 1)
}

const addCountedItem = () => {
  onAdd(count)
}

  return (
    <div className="contadorItem">
        <p>Cantidad: {count}</p>
        <button className='btnCant' onClick={lessItems}>-</button>
        <button className='btnCant' onClick={moreItems}>+</button>
        <br />
        <button className='btnAgregar' onClick={addCountedItem}>Agregar a carrito</button>
    </div>
  )
}

export default ItemCount