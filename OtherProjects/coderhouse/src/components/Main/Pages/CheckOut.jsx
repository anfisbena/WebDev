import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext";
import swal from 'sweetalert';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'producto', width: 130 },
  { field: 'price', headerName: 'precio',type:'number', width: 130 },
  {field: 'presentation', headerName: 'Presentación', width: 90},
  {field: 'quantity', headerName: 'cantidad', width: 90},
];


export default function CheckOut() {
  const {getCart}=useContext(CartContext);
  let totalCart=0;
  getCart.forEach(item => {
    totalCart+=item.price*item.quantity
  });

  return (
    <>
    <h1>Resumen de compra</h1>
    <Grid display='flex'>
      <div style={{ height: 400, width:'50%'}}>
        <DataGrid
          rows={getCart}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <Grid container display='flex' direction='column' alignItems='center' justifyContent='space-evenly'>
        <h2>Total a pagar {'$'+totalCart}</h2>
        <form>
          <label for="fname">First name:</label><br/>
          <input type="text" id="fname" name="fname"/><br/>
          <label for="lname">Last name:</label><br/>
          <input type="text" id="lname" name="lname"/><br/>
          <label for="Email">Email:</label><br/>
          <input type="email" id="Email" name="Email"/><br/>
          <label for="CreditCard">Credit Card Number:</label><br/>
          <input type="text" id="CreditCard" name="CreditCard"/><br/><br/>
          <label for="address">Address:</label><br/>
          <input type="text" id="address" name="address"/><br/>
          <input type="submit" value="Submit" onClick={()=>{
            sessionStorage.setItem('cart', JSON.stringify([]))
            swal("Gracias!", "Tu pedido está en camino", "success")
          }}/>
        </form>
      </Grid>
    </Grid>
  </>
  );
}