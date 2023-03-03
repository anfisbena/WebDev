class ProductManager{

  constructor(){
    this.path='./items.json';
    this.fs=require('fs');
  }

  addProduct=async (title,description,price,thumbnail,code,stock)=>{
    !title||!description||!price||!thumbnail||!code||!stock
      ?console.log('Porfavor complete todos los campos')
      :this.fs.appendFile(this.path,
        {
          id:this.getProducts().length + 1,
          title: title,
          description: description,
          price: price,
          thumbnail: thumbnail,
          code: code,
          stock: stock
        }
      );  
  }

  getProducts=async()=>(
    JSON.parse(this.fs.promises.readFile(this.path,'utf-8',(err,data)=>(err??data)))
  )

  getProductsById=(id)=>(
    this.getProducts().find(item=>item.id===id)??'Id no existente'
  )

  updateProduct=(id,title,description,price,thumbnail,code,stock)=>{
    this.products.findIndex(item=>item.id===id)===-1
      ?console.log('Id no existente')
      :this.products[id]=
        { 
          id:id,
          title:title,
          description:description,
          price:price,
          thumbnail:thumbnail,
          code:code,
          stock:stock
        };
    }

  deleteProduct=(id)=>{
    this.products.findIndex(item=>item.id===id)===-1
      ?console.log('Id no existente')
      :this.products.splice(id,1)
  }

}

const casas = new ProductManager();
casas.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)
console.log(casas.getProducts())
console.log(casas.getProductsById(21))
casas.updateProduct(1,'producto prueba','Este es un producto prueba ACTUALIZADO',200,'Sin imagen','abc123',25)
console.log(casas.getProductsById(1))
casas.deleteProduct(1)
console.log(casas.getProductsById(1))