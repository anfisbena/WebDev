import fs from 'fs';

export default class ProductManager{
  constructor(){
    this.path='./database/products.json';
  }
  
  //false=send object / true=show on console
  getProducts=async(showInConsole)=>(    
    await fs.promises.readFile(this.path,'utf-8',(err,data)=>(err??data))
      .then(obj=>JSON.parse(obj))
      .then(obj=>showInConsole?console.log(obj):obj)
  )

  addProduct=(title,description,price,thumbnail,code,stock)=>{
    !title||!description||!price||!thumbnail||!code||!stock
      ?console.log('Porfavor complete todos los campos')
      :this.getProducts(false)
        .then(obj=>[...obj,
          { 
            id: obj.length!==0?obj[obj.length-1].id+1:obj.length+1,
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
          }
        ])
        .then(async obj=>await fs.promises.writeFile(this.path,JSON.stringify(obj,null,"\t"),(err,data)=>err??data))
  }

  getProductsById=async(id)=>(
    await this.getProducts(false)
      .then(obj=>obj.find(item=>item.id===id)??console.log('Id no existente'))
  )

  updateProduct=(id,title,description,price,thumbnail,code,stock)=>{
    this.getProducts(false)
      .then(obj=>obj.findIndex(item=>item.id===id)===-1||undefined
        ?console.log('Id no existente')
        :obj[id]=
        { 
          id:id,
          title:title,
          description:description,
          price:price,
          thumbnail:thumbnail,
          code:code,
          stock:stock
        }
      )
      .then(async obj=>await fs.promises.writeFile(this.path,JSON.stringify(obj),(err,data)=>err??data)) //queDe ACA
  }

  deleteProduct=(id)=>{
    this.getProducts(false)
    .then(obj.findIndex(item=>item.id===id)===-1||console.log('Id no existente'))
      ?console.log('Id no existente')
      :obj.splice(id,1)
    .then(async obj=>await fs.promises.writeFile(this.path,JSON.stringify(obj),(err,data)=>err??data))
  }
}


