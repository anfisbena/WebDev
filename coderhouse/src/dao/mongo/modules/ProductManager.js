import Product from '../models/products.model.js';
import {ErrorUploadFile} from './ErrorHandler.js'

const defaultFunction=()=>'please provide a function to handle the error'

export const getProducts=async(query,options)=>{
  const result=await Product.paginate(query,options)

  return {
    status:'success',
    payload:result,
    totalPages:result.totalPages,
    prevPage:result.prevPage,
    nextPage:result.nextPage,
    page:result.page,
    hasPrevPage:result.hasPrevPage||null,
    hasNextPage:result.hasNextPage||null,
    prevLink:result.prevLink||null,
    nextLink:result.nextLink||null
  }
};

export const getProductsById=async(id)=>{
  try{
    const result =await Product.findById(id).lean()
    console.log([result])
    return [result]
  }
  catch (error){
    console.log(error)
    return []
  }
}

export const addProduct=async(title,description,code,price,status,stock,category,filename)=>{
  const thumbnails = await filename.map((element) => `http://localhost:8080/images/${element}`)
  const error=ErrorUploadFile(title,description,code,price,status,stock,category,thumbnails);
  const newProduct = {
    title: title,
    description: description,
    code: code,
    price: price,
    status: status ?? true,
    stock: stock,
    category:category,
    thumbnails:thumbnails,
  };
  
  if(error){return {status:error.status,result:error.result,payload:error.payload}}
  else{
    await Product.create(newProduct)
    return {status:200,result:'ok',payload:'producto agregado'}
  }
};

export const updateProduct=async(id,title,description,code,price,status,stock,category)=>{
  try{
    const query ={_id:id}
    const oldProduct=await getProductsById(id)
    const updatedProduct={
      title: title??oldProduct[0].title,
      description: description??oldProduct[0].description,
      code: code??oldProduct[0].code,
      price: price??oldProduct[0].price,
      status: status??oldProduct[0].status,
      stock: stock??oldProduct[0].stock,
      category:category??oldProduct[0].category,
      thumbnails:oldProduct[0].thumbnails
    }
    await Product.findByIdAndUpdate(query,updatedProduct)
    return {status:200,result:'ok',payload:'producto actualizado'}  
  }
  catch (error){
  return {status:404,result:'error',payload:'producto no encontrado'}
  }
}

export const deleteProduct=async(id)=>{
  try{
    await Product.deleteOne({_id:id})
    return {status:200,result:'ok',payload:'producto eliminado'}
  }
  catch(error){
    return {status:404,result:'error',payload:'producto no encontrado'}
  }
}

export default defaultFunction;