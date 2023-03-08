//Quedé en 1:32

//Supongo que la idea es generar un useState aca y usarlo para pasar los items al carrito
//diseñar carrito
import { useState } from "react"
import { CartContext } from "./CartContext.jsx"

const CartProvider = ({children}) => {
  
  const [cart,setCart]=useState([])
  const clear=()=>setCart([])
  const getCart=sessionStorage.getItem('cart')?JSON.parse(sessionStorage.getItem('cart')):sessionStorage.setItem('cart', JSON.stringify([]));

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
    sessionStorage.setItem('cart', JSON.stringify(cart));
  };
      
  return (
    <CartContext.Provider  value={{cart,addItem,clear,getCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider