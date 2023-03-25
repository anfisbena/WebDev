const socket=io();

socket.emit("message","Cliente conectado a socket")
socket.on('addProduct',(newProduct)=>{
  console.log(newProduct)
})