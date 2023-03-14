import ProductManager from './ProductManager.js';
import userManager from './userManager.js';

const userPath='./coderhouse2/database/users.json';
const productPath='./coderhouse2/database/products.json';


const product=new ProductManager(productPath)
// product.getProducts()
// product.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)
product.getProductsById(1)
// product.updateProduct(1,'producto prueba ACTUALIZADO','Este es un producto prueba ACTUALIZADO',200,'Sin imagen','abc123',25)

const user=new userManager(userPath);
// user.addUser({"nombre":"coño","apellido":"Perez","nombreUsuario":'juanperez',"contrasena":'1234'})



//server con nodemon
// const server=http.createServer((request,response)=>{
//   response.end('Mi primer hola mundo desde backend!')
// })

// server.listen(8080,()=>{
//   console.log('Servidor escuchando en el puerto 8080')
// })
