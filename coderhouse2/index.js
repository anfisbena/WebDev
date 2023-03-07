import ProductManager from './modules/ProductManager.js';
import userManager from './modules/userManager.js';

const userPath='./database/users.json';
const productPath='./database/products.json';

const casiQueNo=new ProductManager(productPath)
casiQueNo.getProducts()
casiQueNo.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)
casiQueNo.getProductsById(1)
// casiQueNo.updateProduct(1,'producto prueba ACTUALIZADO','Este es un producto prueba ACTUALIZADO',200,'Sin imagen','abc123',25)

const user=new userManager(userPath);
user.addUser({"nombre":"coño","apellido":"Perez","nombreUsuario":'juanperez',"contrasena":'1234'})