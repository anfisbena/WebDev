import { DataGrid } from '@mui/x-data-grid';
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'producto', width: 130 },
  { field: 'price', headerName: 'precio',type:'number', width: 130 },
  {field: 'presentation', headerName: 'Presentación', width: 90},
  {field: 'quantity', headerName: 'cantidad', width: 90},
];

export default function CheckOut() {
  const {getCart}=useContext(CartContext);
  console.log(getCart)
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={getCart}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}