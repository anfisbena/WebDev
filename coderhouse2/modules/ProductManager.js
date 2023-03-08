import fs from 'fs';

export default class ProductManager{
  constructor(path){
    this.path=path;
    this.products=null;
  }
  
  //false=send object / true=show on console
  getProducts=async()=>{
    try{
      const getProducts=await fs.promises.readFile(this.path,'utf-8')
      this.products=JSON.parse(getProducts)
      return this.products
    }
    catch(err){console.log(err)}
  }

  addProduct=async(title,description,price,thumbnail,code,stock)=>{
    if(!title||!description||!price||!thumbnail||!code||!stock){
      console.log('Porfavor complete todos los campos')
    }
    else{
      this.products??await this.getProducts()
      let newProduct={ 
        id: this.products.length===0
          ?1
          :this.products[this.products.length-1].id+1,
        title:title,
        description:description,
        price:price,
        thumbnail:thumbnail,
        code:code,
        stock:stock
      }

      try{
        await fs.promises.writeFile(this.path,JSON.stringify([...this.products,newProduct],null,"\t"),(err,data)=>err??data)
      }
      catch(err){ console.log(err)}
    }
  }

  getProductsById=async(id)=>{
    this.products??await this.getProducts()
    try{
      this.products.find(item=>item.id===id)??console.log('Id no existente')
    }
    catch(err){console.log(err)}
  }

  updateProduct=async(id,title,description,price,thumbnail,code,stock)=>{
    this.products??await this.getProducts()
    let Id=this.products.find(item=>item.id===id)

    try{
      if(Id===-1){
        console.log('Id no existente')
      }
      else{
        this.products[Id]={ 
          id:id,
          title:title,
          description:description,
          price:price,
          thumbnail:thumbnail,
          code:code,
          stock:stock
        }
        await fs.promises.writeFile(this.path,JSON.stringify(this.products),(err,data)=>err??data)
      }
    }
    catch(err){console.log(err)} //queDe ACA
  }

  deleteProduct=async(id)=>{
    this.products??await this.getProducts()
    let Id=this.products.findIndex(item=>item.id===id);
    try{
      if(Id===-1){
        console.log('Id no existente')
      }
      else{
        this.products.splice(Id,1)
        await fs.promises.writeFile(this.path,JSON.stringify(this.products),(err,data)=>err??data)
      }
    }
    catch(err){console.log(err)}
  }
}