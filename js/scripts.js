//lista de items
let totalTrufas,objectPos,subtotal;

const trufas=[
  {
    id:'balones',
    valor:800,
  },
  {
    id:'chocoratas',
    valor:300,
  },
  {
    id:'corazones1',
    valor:400,
  },
  {
    id:'corazones3',
    valor:700,
  },
  {
    id:'tulipan',
    valor:600,
  },
  {
    id:'manzanilla',
    valor:600,
  },
  {
    id:'orquidea',
    valor:900,
  },
];

//funcion para agregar items a la lista
function agregarItem(){
  document.getElementById('formTrufa').onsubmit=(e)=>{
    Array.from(e.target[1]).forEach(element => {
      if(element.selected){
        let indice=trufas.findIndex((item)=>item.id===element.value);
        sessionStorage.setItem(trufas[indice].id,JSON.stringify(parseInt(e.target[2].value)));
        document.querySelector('.text-decoration-line-through.valorUd').innerHTML=`$${trufas[indice].valor}`;
      }
    })
  }; 
}



document.getElementById('dropdown').onchange=(e)=>{
  Array.from(e.target).forEach(element => {
    if(element.selected && element.value!='Seleccione una opcion'){
      let indice=trufas.findIndex((item)=>item.id===element.value);
      document.querySelector('.valorUd').innerHTML=`$${trufas[indice].valor}`;
      document.querySelector('.subtotal').innerHTML=``;
    }
  })
}; 

agregarItem();
//contador de items
document.querySelector(".badge.bg-dark.text-white.ms-1.rounded-pill").innerHTML=sessionStorage.length-1;