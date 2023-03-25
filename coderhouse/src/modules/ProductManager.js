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
import socket from '../socket.js';

export default class ProductManager{
  constructor(path){
    this.path=path;
    this.productList=[]
  }
  
  getProducts=async()=>{
    const getProducts=await fs.promises.readFile(this.path,'utf-8')
    const result=JSON.parse(getProducts)

    try{return result}
    catch(err){console.log(err)}
  }

  addProduct=async(object,filename)=>{
    this.productList=await this.getProducts()
    let id=this.productList.length===0?1:this.productList[this.productList.length-1].id+1
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
      thumbnails:object.thumbnail=[`http://localhost:8080/images/${filename}`]
    }
    const result=!object.title||!object.description||!object.code||!object.price||!object.status||!object.stock||!object.category||!object.thumbnail
      ?'error'
      :await fs.promises.writeFile(this.path,JSON.stringify([...this.productList,newProduct],null,"\t"),(err,data)=>err??data)
      socket.io.emit('addProduct',newProduct)
      try{return result}
    catch(err){ console.log(err)}
    }

  getProductsById=async(id)=>{
    this.productList=await this.getProducts()
    const result=this.productList.find(item=>{item.id===parseInt(id)})??'Id no existe'

    try{return result}
    catch(err){console.log(err)}
  }

  updateProduct=async(id,object)=>{
    this.productList=await this.getProducts()
    let Id=this.productList.findIndex(item=>item.id===id)
    if(Id===-1){
      return 'Id no existe'
    }
    else{
    let thumbnails=object.thumbnail
      ?this.productList[Id].thumbnails.push(object.thumbnail)
      :this.productList[Id].thumbnails;

    this.productList[Id]=
    { 
      id:id,
      title:object.title??this.productList[Id].title,
      description:object.description??this.productList[Id].description,
      code:object.code??this.productList[Id].code,
      price:object.price??this.productList[Id].price,
      status:object.status??this.productList[Id].status,
      stock:object.stock??this.productList[Id].stock,
      category:object.category??this.productList[Id].category,
      thumbnails:thumbnails
    }
    let result=await fs.promises.writeFile(this.path,JSON.stringify(this.productList,null,"\t"),(err,data)=>err??data);

    try{return result}
    catch(err){console.log(err)} 
    }
  }

  deleteProduct=async(id)=>{
    this.productList=await this.getProducts()
    let Id=this.productList.findIndex(item=>item.id===id)
    if(Id==-1){
      return 'Id no existe'
    }
    else{
      this.productList.splice(Id,1)
      let result=await fs.promises.writeFile(this.path,JSON.stringify(this.productList),(err,data)=>err??data)

      try{return result}  
      catch(err){console.log(err)}
    }
  }
}