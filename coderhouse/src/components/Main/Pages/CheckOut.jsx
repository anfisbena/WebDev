import { useContext } from "react"
import { CartContext } from "../../../context/CartContext";

const CheckOut = () => {
  const {getCart}=useContext(CartContext);
  
  return (
    <div>ITEM LIST</div>
  )
}

export default CheckOut