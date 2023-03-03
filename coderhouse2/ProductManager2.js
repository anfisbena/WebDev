import fs from 'fs';

class ProductManager{
  constructor(){
    this.path='./items.json';    
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
            id:obj.length+1,
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
          }
        ])
        .then(async obj=>await fs.promises.writeFile(this.path,JSON.stringify(obj),(err,data)=>err??data))
  }

  getProductsById=async(id)=>(
    await this.getProducts(false)
      .then(obj=>obj.find(item=>item.id===id)??console.log('Id no existente'))
  )

  updateProduct=(id,title,description,price,thumbnail,code,stock)=>{
    this.getProducts(false)
      .then(obj=>obj.findIndex(item=>item.id===id)===-1
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
    .then(obj.findIndex(item=>item.id===id)===-1)
      ?console.log('Id no existente')
      :obj.splice(id,1)
    .then(async obj=>await fs.promises.writeFile(this.path,JSON.stringify(obj),(err,data)=>err??data))
  }
}

const casiQueNo=new ProductManager()
casiQueNo.getProducts(true)
casiQueNo.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)
casiQueNo.getProductsById(1)
casiQueNo.updateProduct(1,'producto prueba ACTUALIZADO','Este es un producto prueba ACTUALIZADO',200,'Sin imagen','abc123',25)
