//lista de items
const postres=[
  {
    nombre:'mora',
    valor:'3500',
    cantidad:0,
  },
  {
    nombre:'chocolate',
    valor:'3500',
    cantidad:0,
  },
  {
    nombre:'milo',
    valor:'3500',
    cantidad:0,
  },
];
const trufas=[
  {
    nombre:'balones',
    valor:'800',
    cantidad:0,
  },
  {
    nombre:'chocoratas',
    valor:'300',
    cantidad:0,
  },
  {
    nombre:'corazones1',
    valor:'400',
    cantidad:0,
  },
  {
    nombre:'corazones3',
    valor:'700',
    cantidad:0,
  },
  {
    nombre:'tulipan',
    valor:'600',
    cantidad:0,
  },
  {
    nombre:'manzanillap',
    valor:'600',
    cantidad:0,
  },
  {
    nombre:'orquidea',
    valor:'900',
    cantidad:0,
  },
];
const waffles=[
  {
    nombre:'kiwi',
    valor:'800',
    cantidad:0,
  },
  {
    nombre:'fresa',
    valor:'800',
    cantidad:0,
  },
  {
    nombre:'durazno',
    valor:'800',
    cantidad:0,
  },
  {
    nombre:'chocolate',
    valor:'500',
    cantidad:0,
  },
  {
    nombre:'crema',
    valor:'500',
    cantidad:0,
  },
];

//clase carrito para contar y calcular precios
class carrito{
  constructor(){}

  agregar(producto,opcion,cantidad){
    for(producto of postres){
      if(producto.nombre==opcion){
        producto.cantidad+=cantidad;
      }
    }
  }

  agregar2(producto,opcion,cantidad){
    producto.forEach(i=>{
      if(i.nombre==opcion){
        i.cantidad+=cantidad;
      }
    });
  }
}

//total CADA UNO
let totalPostres,totalTrufas,totalWaffles;
postres.forEach(postre=>{totalPostres+=postre.cantidad*postre.valor});
trufas.forEach(trufa=>{totalTrufas+=trufa.cantidad*trufa.valor});
postres.forEach(waffle=>{totalWaffles+=waffle.cantidad*waffle.valor});
