import React from "react";
import { useState } from "react";
import { products } from "../../productosCakes";

const ItemsList = () => {
  const [cart, setCart] = useState([]);
  const addToCart =(item)=>{
    const existe = cart.some((element)=> element.id=== item.id)
    if(!existe){
        setCart([...cart, item])
    } else { 
        alert ("ya existe en el carrito")
    }

    setCart([...cart, item])
  };

  const clearCart =()=>{
    setCart([])
  }

  return (
    <div>
      <h1> Productos</h1>
      {products.map((product) => {
        return (
          <div key={product.id} style ={{border:"white", backgroundColor: "black"}}>
            <h2>{product.name}</h2>
            <img src={product.img} alt="" />
            <h4>${product.price}</h4>            
            <button onClick={()=>addToCart(product)}>Agregar al carrito</button>
          </div>
        );
      })}
      <h1>Aca el carrito</h1>
      <h2> {cart.length}</h2>
      {
        cart.map((element)=> {
            return <div key={element.id} style={{border: "black"}}>
                <h2> {element.name}</h2>
                <h3>{element.price}</h3>
                
            </div>
        })
      }
       <button onClick={()=> setCart([])}> Vaciar carrito</button>
    </div>
  );
 
}


export default ItemsList;
