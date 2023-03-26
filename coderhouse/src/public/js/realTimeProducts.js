
const socket=io();
socket.emit("message","Cliente conectado a socket")
socket.on('realTimeProducts',async(newProduct)=>{
  const imageList=newProduct.thumbnails.forEach(element =>`<img src="${element}" alt="productItem">`)
  const OldItemList=document.getElementById('itemList');
  const NewItemList=document.createElement('div');
  NewItemList.innerHTML=(
    `
    ${imageList}
    <h2>${newProduct.title}</h2>
    <p>NKU:${newProduct.code}</p>
    <p>${newProduct.description}</p>
    <h2>${newProduct.price}</h2>
  `)

  return OldItemList.appendChild(NewItemList);
})