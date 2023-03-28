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

import { promises as fs } from 'fs';

export default class CartManager {
    constructor(path) {
        this.path = path;
        this.cartList = [];
    }

    async getCart() {
        try {
            const cart = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(cart);
        } catch (err) {
            console.log(err);
        }
    }

    async getCartById(cid) {
        this.cartList = await this.getCart();
        const result = this.cartList.find(item => item.id === parseInt(cid)) ?? 'Id no existe';
        console.log(result);
        try {
            return result;
        } catch (err) {
            console.log(err);
        }
    }

    async addCart() {
        this.cartList = await this.getCart();
        const newCid = this.cartList.length === 0 ? 1 : this.cartList[this.cartList.length - 1].id + 1;
        const newCart = {
            id: newCid,
            products: []
        };
        this.cartList = [...this.cartList, newCart];
        let result = null;
        try {
            result = await fs.writeFile(this.path, JSON.stringify(this.cartList, null, '\t'));
            return result;
        } catch (err) {
            console.log(err);
        }
    }

    async addProduct(cid, pid) {
        if (!cid || !pid) {
            return 'error';
        }
        this.cartList = await this.getCart();
        const cartIndex = this.cartList.findIndex(cart => cart.id === parseInt(cid));
        if (cartIndex === -1) {
            return 'error';
        }
        const productList = this.cartList[cartIndex].products;
        const productIndex = productList.findIndex(product => product.product === pid);
        if (productIndex === -1) {
            productList.push({ product: pid, quantity: 1 });
        } else {
            productList[productIndex].quantity++;
        }
        let result = null;
        try {
            result = await fs.writeFile(this.path, JSON.stringify(this.cartList, null, '\t'));
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}