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

const addCountedItem = (ev) => {
  onAdd(count)
}

  return (
    <div className="contadorItem">
        <p>Cantidad: {count}</p>
        <button onClick={lessItems}>-</button>
        <button onClick={moreItems}>+</button>
        <br />
        <button onClick={addCountedItem}>Agregar a carrito</button>
    </div>
  )
}

export default ItemCount