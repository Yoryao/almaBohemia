import React, { useState , useContext } from "react";
import ItemCount from "../section/ItemCount";
import { Link } from "react-router-dom";
import {CartContext} from "../../context"


export const ItemDetail = (props) => {

const [ocultar, setOcultar] = useState(true)
const [cantidad, setCantidad] = useState(0)

const onAdd = (contador) => {
console.log("Contador desde ItemDetail");
setOcultar(false);
setCantidad(contador);
}

if(ocultar) {

  return (
    <div>
      <img alt="logo" src={props.detail.img} />
      <h4>Nombre: {props.detail.nombre}</h4>
      <h4>Descripción: {props.detail.descripcion}</h4>
      <h4>Categoria: {props.detail.categoria}</h4>
      <h4>Precio: ${props.detail.precio}</h4>
      <ItemCount
        stock={7}
        initial={0} 
        onAdd={onAdd}
      />
    </div>
  );
} else {
  return (
    <div>
      <img alt="logo" src={props.detail.img} />
      <h3>Nombre: {props.detail.nombre}</h3>
      <h3>Descripción: {props.detail.descripcion}</h3>
      <h3>Notificación: se agregaron {cantidad} unidades</h3>
      <Link to={`/cart`}><button variant="primary">Terminar Comprar</button>
        </Link>
         </div>
  )}
};

export default ItemDetail;
