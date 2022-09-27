//lista de items
let totalTrufas,objectPos,subtotal,valorUD,cantidad;

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
class usuario{

  agregarItem(){
    document.querySelector('.mt-3.mb-3.formulario').onsubmit=(e)=>{
      Array.from(e.target[1]).forEach(element => {
        if(element.selected){
          let indice=trufas.findIndex((item)=>item.id===element.value);
          sessionStorage.setItem(trufas[indice].id,JSON.stringify(
            {
              'id':trufas[indice].id,
              'cantidad':parseInt(e.target[2].value),
              'valorUD':trufas[indice].valor,
            }
          ));
        }
      })
    }; 
  }

  muestraPrecio(){
    document.getElementById('dropdown').onchange=(e)=>{
      Array.from(e.target).forEach(element => {
        if(element.selected && element.value!='Seleccione una opcion'){
          let indice=trufas.findIndex((item)=>item.id===element.value);
          document.querySelector('.valorUd').innerHTML=`$${trufas[indice].valor}`;
          document.querySelector('.subtotal').innerHTML=``;
        }
      })
    }; 
  }

  carrito(){
    // console.log(JSON.parse(sessionStorage.getItem('corazones1')).cantidad*JSON.parse(sessionStorage.getItem('corazones1')).valorUD);
    document.querySelector(".badge.bg-dark.text-white.ms-1.rounded-pill.carrito").innerHTML=sessionStorage.length-1==-1?0:sessionStorage.length-1;
  }

}




const usuarioActual=new usuario();
usuarioActual.agregarItem();
usuarioActual.muestraPrecio();
usuarioActual.carrito();

//contador de items
