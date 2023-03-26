
const socket=io();
socket.emit("message","Cliente conectado a socket")
socket.on('realTimeProducts',(newProduct)=>{
  const OldItemList=document.getElementById('itemList');
  const ImageList=newProduct.thumbnails.forEach(element =>`<img src="${element}" alt="productItem">`)
  console.log(ImageList)
  const NewItem=document.createElement('div')
  NewItem.className='item'

  NewItem.innerHTML=(
    `
    <h2>${newProduct.title}</h2>
    <p>NKU:${newProduct.code}</p>
    <p>${newProduct.description}</p>
    <h2>${newProduct.price}</h2>
    `
  )
  

  return OldItemList.appendChild(NewItem);
  
})