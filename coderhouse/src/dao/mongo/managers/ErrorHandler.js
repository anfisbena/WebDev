export const ErrorUploadFile=(title,description,code,price,status,stock,category,thumbnails)=>{
  if(!title){return {status:400,result:'error',error:'falta el titulo'}}
  if(!description){return {status:400,result:'error',error:'falta la descripcion'}}
  if(!code){return {status:400,result:'error',error:'falta el codigo'}}
  if(!price){return {status:400,result:'error',error:'falta el precio'}}
  if(!status){return {status:400,result:'error',error:'falta el status'}}
  if(!stock){return {status:400,result:'error',error:'falta el stock'}}
  if(!category){return {status:400,result:'error',error:'falta la categoria'}}
  if(!thumbnails.length){return {status:400,result:'error',error:'falta las imagenes'}}
}

export const ErrorCreateUser=(first_name,last_name,email,userExist)=>{
  if(!first_name){return {status:400,result:'error',error:'falta el nombre'}}
  if(!last_name){return {status:400,result:'error',error:'falta el apellido'}}
  if(!email){return {status:400,result:'error',error:'falta el email'}}
  if(userExist){return {status:400,result:'error',error:'Verifica tu correo, ya esta registrado'}}
}

export default {ErrorCreateUser,ErrorUploadFile};