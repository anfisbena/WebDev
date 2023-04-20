console.log(document.querySelector('#qty'))

const addToCartButton = document.querySelector('#add-to-cart');
addToCartButton.addEventListener('click', () => {
  const qtyInput = document.querySelector('#qty');
  const qtyValue = qtyInput.value;
  console.log(`Se ha agregado ${qtyValue} artículos al carrito.`);
});