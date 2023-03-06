import ProductManager from './ProductManager.js';

const casiQueNo=new ProductManager()
casiQueNo.getProducts(true)
casiQueNo.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)
casiQueNo.getProductsById(1)
// casiQueNo.updateProduct(1,'producto prueba ACTUALIZADO','Este es un producto prueba ACTUALIZADO',200,'Sin imagen','abc123',25)