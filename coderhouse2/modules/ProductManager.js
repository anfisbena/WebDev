import fs from 'fs';

export default class ProductManager{
  constructor(path){
    this.path=path;
  }
  
  getProducts=async()=>{
    try{
      const getProducts=await fs.promises.readFile(this.path,'utf-8')
      return JSON.parse(getProducts)
    }
    catch(err){console.log(err)}
  }

  addProduct=async(title,description,price,thumbnail,code,stock)=>{
      try{
        if(!title||!description||!price||!thumbnail||!code||!stock){
          console.log('Porfavor complete todos los campos')
        }
        else{
          let productList=await this.getProducts()
          let newProduct={ 
            id: productList.length===0
              ?1
              :productList[productList.length-1].id+1,
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
          }
          await fs.promises.writeFile(this.path,JSON.stringify([...productList,newProduct],null,"\t"),(err,data)=>err??data)
        }
      }
      catch(err){ console.log(err)}
    }

  getProductsById=async(id)=>{
    try{
      const productList=await this.getProducts()
      return productList.find(item=>item.id===id)??'Id no existente'
    }
    catch(err){console.log(err)}
  }

  updateProduct=async(id,title,description,price,thumbnail,code,stock)=>{
    try{
      const productList=await this.getProducts()
      let Id=productList.find(item=>item.id===id)
      
      if(Id===-1){
        console.log('Id no existente')
      }
      else{
        productList[Id]={ 
          id:id,
          title:title,
          description:description,
          price:price,
          thumbnail:thumbnail,
          code:code,
          stock:stock
        }
        await fs.promises.writeFile(this.path,JSON.stringify(productList),(err,data)=>err??data)
      }
    }
    catch(err){console.log(err)} //queDe ACA
  }

  deleteProduct=async(id)=>{
    try{
      const productList=await this.getProducts()
      let Id=productList.findIndex(item=>item.id===id);
      if(Id===-1){
        console.log('Id no existente')
      }
      else{
        productList.splice(Id,1)
        await fs.promises.writeFile(this.path,JSON.stringify(productList),(err,data)=>err??data)
      }
    }
    catch(err){console.log(err)}
  }
}