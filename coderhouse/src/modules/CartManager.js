/*You can easily read my code like this:
function name(){
  //Core conditionals
  //Variables
  result = Final result
  try{result}
  catch{error}
}
Enjoy 🌴 
*/

import fs from 'fs';

export default class CartManager{
  constructor(path){
    this.path=path;
    this.cartList=[]
  }
  
  getCart=async()=>{
//VARIABLES
    const getCart=await fs.promises.readFile(this.path,'utf-8')
//RESULT
    const result=JSON.parse(getCart)
    try{return result}
    catch(err){console.log(err)}
  }

  addProduct=async(cid,pid)=>{
//CORE
    if(!cid||!pid){return 'error'}
//VARIABLES
    this.cartList=await this.getCart()
    let cart=this.cartList.findIndex(cart=>cart.id===cid)
    let newCid=this.cartList.length===0?1:this.cartList[this.cartList.length-1].id+1
    let productList=this.cartList[cart].products
    let productIndex=productList.findIndex(product=>product.product===pid)
    let newCart=
    { 
      id:newCid,
      products:[
        {
          product:pid,
          quantity:1
        }
      ]
    }
//MAGIC
    if(cart===-1){this.cartList=[...this.cartList,newCart]}
    else{
      productIndex===-1
        ?productList.push({product:pid,quantity:1})
        :productList[productIndex].quantity++;
    }
//RESULT    
    const result=await fs.promises.writeFile(this.path,JSON.stringify(this.cartList),(err,data)=>err??data)
    try{return result}
    catch(err){ console.log(err)}
  }
}