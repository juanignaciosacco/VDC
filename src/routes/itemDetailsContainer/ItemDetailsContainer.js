import ItemDetails from "../../components/ItemDetails/ItemDetails"
import { useParams } from "react-router-dom"

const ItemDetailsContainer = () => {

    const {idProd} = useParams()

    return (
        <div>
            <h1>Detalles del producto</h1>
            <ItemDetails id={idProd}/>
        </div>
    )
}

export default ItemDetailsContainer