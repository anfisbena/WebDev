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
    const carrito=sessionStorage.getItem('carrito')==null?[]:
      JSON.parse(sessionStorage.getItem('carrito'));
    document.querySelector('.mt-3.mb-3.formulario').onsubmit=(form)=>{
      Array.from(form.target[1]).forEach(element => {
        if(element.selected){
          let indice=trufas.findIndex((item)=>item.id===element.value);
          let indiceProducto=carrito.findIndex((item)=>item.id===element.value);
          let producto={
              'id':trufas[indice].id,
              'cantidad':parseInt(form.target[2].value),
              'valorUD':trufas[indice].valor,
            }
            indiceProducto==-1?carrito.push(producto):
              carrito[indiceProducto]=producto;
          sessionStorage.setItem('carrito',JSON.stringify(carrito));
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
    let carrito=JSON.parse(sessionStorage.carrito);
    document.querySelector(".badge.bg-dark.text-white.ms-1.rounded-pill.carrito").innerHTML=carrito.length==-1?0:carrito.length;
  }

}




const usuarioActual=new usuario();
usuarioActual.agregarItem();
usuarioActual.muestraPrecio();
usuarioActual.carrito();
//contador de items
