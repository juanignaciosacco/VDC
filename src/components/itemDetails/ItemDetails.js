import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./itemDetails.css";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../../contextos/CartContext";
import CarouselItemDetail from "../CarouselItemDetail/CarouselItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetails = () => {
  const [producto, setProducto] = useState({});
  const [contador, setContador] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams();
  const { addItemToCartList } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const itemFromId = doc(db, "productos", id);
    getDoc(itemFromId).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
      } else {
        setError("Este producto no existe");
      }
    });
  }, [id]);

  const addCounterState = (ev) => {
    setContador(ev);
  };

  const buttonClickHandler = () => {
    const productoACarrito = { ...producto, cantidad: contador };
    addItemToCartList(productoACarrito);
  };

  return (
    <div className="itemsDetails">
      {error !== "" ? (
        <div>
          <p>{error}</p>
        </div>
      ) : (
        <div className="contenedor">
          <div className="imgDetails">
            <CarouselItemDetail images={producto.imgUrl} />
          </div>
          <div className="infoDetails">
            <h3>{producto.Nombre}</h3>
            <p>{producto.Descripcion}</p>
            <p className="stockTxt">Stock: {producto.Stock}</p>
            <p className="precioTxt">${producto.Precio}</p>
            {contador !== 0 && (
              <p className="cantidadSelecTxt">
                Cantidad seleccionada: {contador}
              </p>
            )}
            {contador === 0 ? (
              <ItemCount
                className="m-2"
                stock={producto.Stock}
                onAdd={addCounterState}
              />
            ) : (
              <Link to={"/Cart"}>
                <button
                  className="btn btn-finalizarCompra"
                  onClick={buttonClickHandler}
                >
                  Finalizar compra
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
