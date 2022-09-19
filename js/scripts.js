//lista de items
let totalTrufas,objectPos,subtotal;

const trufas=[
  {
    id:'balones',
    valor:800,
    cantidad:0,
  },
  {
    id:'chocoratas',
    valor:300,
    cantidad:0,
  },
  {
    id:'corazones1',
    valor:400,
    cantidad:0,
  },
  {
    id:'corazones3',
    valor:700,
    cantidad:0,
  },
  {
    id:'tulipan',
    valor:600,
    cantidad:0,
  },
  {
    id:'manzanilla',
    valor:600,
    cantidad:0,
  },
  {
    id:'orquidea',
    valor:900,
    cantidad:0,
  },
];

//funcion para agregar items a la lista

document.getElementById('formTrufa').onsubmit=(e)=>{
  Array.from(e.target[1]).forEach(element => {
    if(element.selected==true){
      objectPos=trufas.findIndex((item)=>item.id===element.value);
      trufas[objectPos].cantidad=parseInt(e.target[2].value);
    }
  })
  // sessionStorage.setItem('trufas',JSON.stringify(trufas));
};
  
console.log(trufas.forEach((item)=>{parseInt(item.cantidad)*parseInt(item.valor);}));
document.querySelector('.subtotal').innerHTML=`$${subtotal}`;
