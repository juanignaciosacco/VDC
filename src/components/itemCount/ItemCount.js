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
        <button className='px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full leading-3' onClick={lessItems}>-</button>
        <button className='px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full leading-3' onClick={moreItems}>+</button>
        <br />
        <button className=' px-6 py-2 text-sm bg-slate-200 hover:bg-slate-400 text-black-500 rounded rounded-full leading-3' onClick={addCountedItem}>Agregar a carrito</button>
    </div>
  )
}

export default ItemCount