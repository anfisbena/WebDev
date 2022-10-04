//lista de items
const inventario=[
  {
    id:'CHO01',
    nombre:'Chocolate Balones',
    valor:800,
  },
  {
    id:'CHO02',
    nombre:'Chocoratas',
    valor:300,
  },
  {
    id:'CHO03',
    nombre:'Chocolate Corazones X 1',
    valor:400,
  },
  {
    id:'CHO04',
    nombre:'Chocolate Corazones X 3',
    valor:700,
  },
  {
    id:'CHO05',
    nombre:'Chocolate Tulipan',
    valor:600,
  },
  {
    id:'CHO06',
    nombre:'Chocolate Manzanilla',
    valor:600,
  },
  {
    id:'CHO07',
    nombre:'Chocolate Orquidea',
    valor:900,
  },
  {
    id:'POS01',
    nombre:'Postre Arequipe',
    valor:2500,
  },
  {
    id:'POS02',
    nombre:'Postre Fresa',
    valor:2500,
  },
  {
    id:'POS03',
    nombre:'Postre Mora',
    valor:2500,
  },
  {
    id:'POS04',
    nombre:'Postre Chocolate',
    valor:2500,
  },
  {
    id:'POS05',
    nombre:'Postre Chantilli',
    valor:2500,
  },
  {
    id:'POS06',
    nombre:'Postre Vainilla',
    valor:2500,
  },
  {
    id:'POS07',
    nombre:'Postre Limón',
    valor:2500,
  }
];


//funcion para agregar items a la lista
class usuario{

  agregarItem(){
    const carrito=sessionStorage.getItem('carrito')==null?[]:
      JSON.parse(sessionStorage.getItem('carrito'));
    document.querySelector('.mt-3.mb-3.formulario').onsubmit=(form)=>{
      Array.from(form.target[1]).forEach(element => {
        if(element.selected){
          let indice=inventario.findIndex((item)=>item.id===element.value);
          let indiceProducto=carrito.findIndex((item)=>item.id===element.value);
          let producto={
              'id':inventario[indice].id,
              'nombre':inventario[indice].nombre,
              'cantidad':parseInt(form.target[2].value),
              'valorUD':inventario[indice].valor,
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
          let indice=inventario.findIndex((item)=>item.id===element.value);
          document.querySelector('.valorUd').innerHTML=`$${inventario[indice].valor}`;
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
