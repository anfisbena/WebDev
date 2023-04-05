/*You can easily read my code like this:
function name(){
  //Variables
  result = Final result

  try{result}
  catch{error}
}
Enjoy 🌴 
*/

import { promises as fs } from 'fs';
import socket from '../socket.js';

export default class ProductManager {
  constructor(path) {
    this.path = path;
    this.productList = [];
  }

  async getProducts() {
    try {
      const getProducts = await fs.readFile(this.path, 'utf-8');
      return JSON.parse(getProducts);
    } catch (err) {
      console.log(err);
    }
  }

  async addProduct(object, filename) {
    this.productList = await this.getProducts();
    const id =this.productList.length === 0 ? 1 : this.productList[this.productList.length - 1].id + 1;
    const thumbnails = await Promise.all(
      filename.map((element) => `http://localhost:8080/images/${element}`)
    );
    const newProduct = {
      id,
      title: object.title,
      description: object.description,
      code: object.code,
      price: object.price,
      status: object.status ?? true,
      stock: object.stock,
      category: object.category,
      thumbnails,
    };
    let result = null;
    try {
      result = await fs.writeFile(
        this.path,
        JSON.stringify([...this.productList, newProduct], null, '\t')
      );
      socket.io.emit('realTimeProducts', newProduct);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async getProductsById(id) {
    this.productList = await this.getProducts();
    const result = this.productList.find((item) => item.id === parseInt(id)) ?? 'Id no existe';

    try {
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async updateProduct(id, object) {
    this.productList = await this.getProducts();
    const index = this.productList.findIndex((item) => item.id === id);
    if (index === -1) {
      return 'Id no existe';
    } else {
      const thumbnails = object.thumbnails
        ? [...this.productList[index].thumbnails, object.thumbnails]
        : this.productList[index].thumbnails;

      this.productList[index] = {
        id,
        title: object.title ?? this.productList[index].title,
        description: object.description ?? this.productList[index].description,
        code: object.code ?? this.productList[index].code,
        price: object.price ?? this.productList[index].price,
        status: object.status ?? this.productList[index].status,
        stock: object.stock ?? this.productList[index].stock,
        category: object.category ?? this.productList[index].category,
        thumbnails,
      };
      let result = null;
      try {
        result = await fs.writeFile(this.path, JSON.stringify(this.productList, null, '\t'));
        return result;
      } catch (err) {
        console.log(err);
      }
    }
  }

  async deleteProduct(id) {
    this.productList = await this.getProducts();
    const index = this.productList.findIndex((item) => item.id === id);
    if (index === -1) {
      return 'Id no existe';
    } else {
      this.productList.splice(index, 1);
      let result = null;
      try {
        result = await fs.writeFile(this.path, JSON.stringify(this.productList));
        return result;
      } catch (err) {
        console.log(err);
      }
    }
  }
}