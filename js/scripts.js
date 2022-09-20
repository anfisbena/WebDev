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
    e.preventDefault();
    Array.from(e.target[1]).forEach(element => {
      if(element.selected){
        console.log(element.value)
        let indice=trufas.findIndex((item)=>item.id===element.value);
        sessionStorage.setItem(trufas[indice].id,JSON.stringify(trufas[indice].valor));
        sessionStorage.setItem(trufas[indice].id,JSON.stringify(trufas[indice].cantidad=e.target[2].value));
      }
    })
  }; 
}

agregarItem();
