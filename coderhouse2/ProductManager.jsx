class ProductManager{

  constructor(){
    this.products=[];
  }

  addProduct=(title,description,price,thumbnail,code,stock)=>{
    const ItemIndex=this.products.findIndex(item=>item.id===id)
    const product={
      id:this.products.length+1,
      title:title,
      description:description,
      price:price,
      thumbnail:thumbnail,
      code:code,
      stock:stock};

      ItemIndex!=-1
      ?this.products[ItemIndex]
      :this.products.push(product);
    }

  getProducts=()=>(
    this.products
  )

  getProductsById=(id)=>(
    this.products.find(item=>item.id===id)??'Not Found'
  )
}

// const laputa = new ProductManager();
// laputa.addProduct('casa','rico',null,null,50)
// console.log(laputa.getProducts())
// console.log(laputa.getProductsById(1))