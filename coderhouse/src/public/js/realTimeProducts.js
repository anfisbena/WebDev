
const socket=io();
socket.emit("message","Cliente conectado a socket")
socket.on('realTimeProducts',(newProduct)=>{
  console.log(newProduct)
  
})

