const socket = io();

socket.emit('message', 'Cliente conectado a socket');

socket.on('realTimeProducts', (newProduct) => {
  const itemList = document.getElementById('itemList');

  const imageList = newProduct.thumbnails.map((element) => `
    <img src="${element}" alt="productItem">
  `).join('');

  const newItem = document.createElement('div');
  newItem.classList.add('item');

  const itemContent = `
    ${imageList}
    <h2>${newProduct.title}</h2>
    <p>NKU:${newProduct.code}</p>
    <p>${newProduct.description}</p>
    <h2>${newProduct.price}</h2>
  `;

  newItem.insertAdjacentHTML('beforeend', itemContent);
  itemList.appendChild(newItem);
});