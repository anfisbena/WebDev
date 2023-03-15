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

  addProduct=async(object)=>{
    let productList=await this.getProducts()
    let id=productList.length===0?1:productList[productList.length-1].id+1
    let newProduct=
    { 
      id:id,
      title:object.title,
      description:object.description,
      code:object.code,
      price:object.price,
      status:object.status||true,
      stock:object.stock,
      category:object.category,
      thumbnails:object.thumbnail
    }
    const result=!object.title||!object.description||!object.price||!object.thumbnail||!object.code||!object.stock
      ?'error'
      :await fs.promises.writeFile(this.path,JSON.stringify([...productList,newProduct],null,"\t"),(err,data)=>err??data)
    
    try{return result}
    catch(err){ console.log(err)}
    }

  getProductsById=async(id)=>{
    const productList=await this.getProducts()
    const result=productList.find(item=>item.id===id)??'Id no existe'

    try{return result}
    catch(err){console.log(err)}
  }

  updateProduct=async(id,object)=>{
    const productList=await this.getProducts()
    let Id=productList.find(item=>item.id===id)??'Id no existe'
    let result=await fs.promises.writeFile(this.path,JSON.stringify(productList),(err,data)=>err??data)

    if(Id==='Id no existe'){
      return 'Id no existe'
    }
    else{
    productList[id]=
    { 
      id:id,
      title:object.title,
      description:object.description,
      code:object.code,
      price:object.price,
      status:object.status||true,
      stock:object.stock,
      category:object.category,
      thumbnails:object.thumbnail
    }
    try{return result}
    catch(err){console.log(err)} 
    }
  }

  deleteProduct=async(id)=>{
    const productList=await this.getProducts()
    let Id=productList.findIndex(item=>item.id===id)
    let result=await fs.promises.writeFile(this.path,JSON.stringify(productList),(err,data)=>err??data)
    console.log(Id)
    if(Id==-1){
      return 'Id no existe'
    }
    else{
      productList.splice(Id,1)
      try{return result}  
      catch(err){console.log(err)}
    }
  }
}