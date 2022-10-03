import ItemDetails from "../../components/itemDetails/ItemDetails"

const ItemDetailsContainer = () => {

    return (
        <div>
            <h1>Detalles del producto</h1>
            <ItemDetails id={idProd}/>
        </div>
    )
}

export default ItemDetailsContainer