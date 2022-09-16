//lista de items
let totalPostres,totalTrufas,totalWaffles;
const postres=[
  {
    id:'postreFresa',
    nombre:'fresa',
    valor:3500,
    cantidad:0,
  },
  {
    id:'postreMora',
    nombre:'mora',
    valor:3500,
    cantidad:0,
  },
  {
    id:'postreChocolate',
    nombre:'chocolate',
    valor:3500,
    cantidad:0,
  },
  {
    id:'postreMilo',
    nombre:'milo',
    valor:3500,
    cantidad:0,
  },
];
const trufas=[
  {
    id:'balones',
    valor:'800',
    cantidad:0,
  },
  {
    id:'chocoratas',
    valor:'300',
    cantidad:0,
  },
  {
    id:'corazones1',
    valor:'400',
    cantidad:0,
  },
  {
    id:'corazones3',
    valor:'700',
    cantidad:0,
  },
  {
    id:'tulipan',
    valor:'600',
    cantidad:0,
  },
  {
    id:'manzanillap',
    valor:'600',
    cantidad:0,
  },
  {
    id:'orquidea',
    valor:'900',
    cantidad:0,
  },
];
const waffles=[
  {
    id:'agregarKiwi',
    valor:'800',
    agregar:false,
  },
  {
    id:'agregarFresa',
    valor:'800',
    agregar:false,
  },
  {
    id:'agregarDurazno',
    valor:'800',
    agregar:false,
  },
  {
    id:'agregarChocolate',
    valor:'500',
    agregar:false,
  },
  {
    id:'agregarCrema',
    valor:'500',
    agregar:false,
  },
];

//funcion para agregar items a la lista

document.getElementById('formPostre').onsubmit=(e)=>{
  Array.from(e.target).forEach(element => {
    if(element.id!=''){
      postres[postres.findIndex((item)=>item.id===element.id)].cantidad=parseInt(element.value);
    }
  })
};
sessionStorage.setItem('postres',JSON.stringify(postres));


document.getElementById('formTrufa').onsubmit=(e)=>{
  Array.from(e.target).forEach(element => {
    if(element.id!=''){
      trufas[trufas.findIndex((item)=>item.id===element.id)].cantidad=parseInt(element.value);
    }
  })
};
sessionStorage.setItem('trufas',JSON.stringify(trufas));


document.getElementById('formWaffle').onsubmit=(e)=>{
  console.log(e);
  Array.from(e.target).forEach(element => {
    if(element.id!=''){
      waffles[waffles.findIndex((item)=>item.id===element.id)].agregar=element.checked;
    }
  })
};
// sessionStorage.setItem('waffles',JSON.stringify(waffles));
