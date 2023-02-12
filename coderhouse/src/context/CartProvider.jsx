//Quedé en 1:32

//Supongo que la idea es generar un useState aca y usarlo para pasar los items al carrito
//diseñar carrito
import { useState } from "react"
import { CartContext } from "./CartContext.jsx"

const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])
  
  const addItem=(item)=>{
    const newItem={
      id:item.id,
      name:item.name,
      price:item.price,
      presentation:item.presentation,
      size:item.size,
      quantity:item.quantity
    };
    setCart([...cart,newItem])
  };

  const clear=()=>setCart([])

  return (
    <CartContext.Provider  value={{cart,addItem,clear}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider