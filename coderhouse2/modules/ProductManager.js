/*You can easily read my code like this:
function name(){
  //Variables
  result = Final result

  try{result}
  catch{error}
}
Enjoy 🌴 
*/

import fs from 'fs';

export default class ProductManager{
  constructor(path){
    this.path=path;
  }
  
  getProducts=async()=>{
    const getProducts=await fs.promises.readFile(this.path,'utf-8')
    const result=JSON.parse(getProducts)
    try{return result}
    catch(err){console.log(err)}
  }

  addProduct=async(title,description,price,thumbnail,code,stock)=>{
    let productList=await this.getProducts()
    let id=productList.length===0?1:productList[productList.length-1].id+1
    let newProduct=
    { 
      id: id,
      title:title,
      description:description,
      price:price,
      thumbnail:thumbnail,
      code:code,
      stock:stock
    }
    const result=!title||!description||!price||!thumbnail||!code||!stock
      ?console.log('Porfavor complete todos los campos')
      :await fs.promises.writeFile(this.path,JSON.stringify([...productList,newProduct],null,"\t"),(err,data)=>err??data)
    
    try{return result}
    catch(err){ console.log(err)}
    }

  getProductsById=async(id)=>{
    const productList=await this.getProducts()
    const result=productList.find(item=>item.id===id)??'Id no existente'

    try{return result}
    catch(err){console.log(err)}
  }

  updateProduct=async(id,title,description,price,thumbnail,code,stock)=>{
    const productList=await this.getProducts()
    let Id=productList.findIndex(item=>item.id===id)
    let newProduct=productList[Id]=
    {
      id:id,
      title:title,
      description:description,
      price:price,
      thumbnail:thumbnail,
      code:code,
      stock:stock
    }
    let result=await fs.promises.writeFile(this.path,JSON.stringify(productList),(err,data)=>err??data)
    
    if(Id===-1){console.log('Id no existente')}
    else{
      newProduct
      try{return result}
      catch(err){console.log(err)} //queDe ACA
    }
  }

  deleteProduct=async(id)=>{
    const productList=await this.getProducts()
    let Id=productList.findIndex(item=>item.id===id);
    let result=await fs.promises.writeFile(this.path,JSON.stringify(productList),(err,data)=>err??data)
    if(Id===-1){
      console.log('Id no existente')
    }
    else{
      productList.splice(Id,1)
      try{return result}  
      catch(err){console.log(err)}
    }
  }
}