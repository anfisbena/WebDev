export const ErrorUploadFile=(title,description,code,price,status,stock,category,thumbnails)=>{
  if(!title){return {status:400,result:'error',payload:'falta el titulo'}}
  if(!description){return {status:400,result:'error',payload:'falta la descripcion'}}
  if(!code){return {status:400,result:'error',payload:'falta el codigo'}}
  if(!price){return {status:400,result:'error',payload:'falta el precio'}}
  if(!status){return {status:400,result:'error',payload:'falta el status'}}
  if(!stock){return {status:400,result:'error',payload:'falta el stock'}}
  if(!category){return {status:400,result:'error',payload:'falta la categoria'}}
  if(!thumbnails.length){return {status:400,result:'error',payload:'falta las imagenes'}}
}


const defaultFunction=()=>{'please provide a function to handle the error'}
export default defaultFunction;