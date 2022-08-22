//CLASE 1

function ciudades(){
  const ciudad1=prompt(`Dime una ciudad`);
  const ciudad2=prompt(`Dime otra ciudad`);
  const ciudad3=prompt(`Dime otra ciudad`);
  const ciudad4=prompt(`Dime otra ciudad`);
  const ciudad5=prompt(`Dime la ultima ciudad`);
}

function carnet(){
  let identification={
    nombre:"",
    apellido:"",
    ciudad:"",
    pais:"",
    edad:"",
  };
  identification.nombre=prompt(`Cual es tu nombre`);
  identification.apellido=prompt(`Cual es tu apellido ${identification.nombre}`);
  identification.edad=prompt(`Cual es tu edad ${identification.nombre}`);
  identification.ciudad=prompt(`Cual es tu ciudad ${identification.nombre}`);
  identification.pais=prompt(`Cual es tu pais ${identification.nombre}`);
  document.write(`<h1>Eres ${identification.nombre} ${identification.apellido} y tienes ${identification.edad}, ademas vives en ${identification.ciudad},${identification.pais}</h1>`);
}

//CLASE 2
function yoNoFui(){
  let siFue='Raul';
  let noFue=prompt(`Dime tu nombre`);
  if(noFue==siFue){
    document.write(`<h1>Fui yo, ${siFue}</h1>`);
  }
  else{
    document.write(`<h1>yo no fui, ${noFue}</h1>`);
  }
}

function alerta(){
  let tecla=prompt(`Dime una tecla`);
  if(tecla=='y'||tecla=='Y'){
    alert(`Correcto`);
  }
  else{
    alert(`Error`);
  }
}

function personaje(){
  let personaje=parseInt(prompt(`Escoge un personaje`));
  switch(personaje){
    case 1:return(`<h1>Elegiste a Homero</h1>`);
    case 2:return(`<h1>Elegiste a Marge</h1>`);
    case 3:return(`<h1>Elegiste a Bart</h1>`);
    case 4:return(`<h1>Elegiste a Lisa</h1>`);
  }
}

function presupuesto(){
  let numero=parseInt(prompt(`Escoge un numero`));
  if (numero>=0&&numero<=1000){return(`Presupuesto bajo`)}
  else if(numero>=1001&&numero<=3000){return(`Presupuesto medio`)}
  else if(numero>3000){return(`Presupuesto alto`)};
}

function vacio(){
  let cesta=[];
  for(let i=0;i<4;i++){
    cesta[i]=prompt(`Dime el producto`);
    if(cesta[i]==''){
      alert('ERROR: Es necesario cargar todos los productos');
      cesta=[]
      break;
    }
  }
  return cesta;
}

//CLASE 3
function pizarron(){
  let frase=prompt(`Dime una frase`);
  let repeticion=prompt(`Dime cuantas veces quieres repetir la frase`);
  for(let i=0;i<repeticion;i++){
    document.write(`Y dice: ${frase}<br/>`);
  }
}

function cuadradoOrdinario(){
  let lados=parseInt(prompt(`Dime cuantos lados tiene el cuadrado`));
  document.write(`Ya veo, el cuadrado tiene ${lados} lados, contemos:<br/>`)
  for (let i=0;i<lados;i++){
    if(i<4){document.write(`-Lado ${i+1}<br/>`); }
    else{break;}
  }
}

function alumnos(){
  let alumnos='';  
  for (let i=0;i<10;i++){
    alumnos+=prompt(`cual es el nombre del almunmo #${i+1}`)+'\n';
  }
  return alumnos;
};

function innombrable(){
  let nombre='',mago;  
  while(true){
    mago=prompt(`Cual es el nombre del mago`);
    switch(mago){
      case 'Harry Potter':
        nombre+=mago+'\n';
        alert(`El niño que vivio`);
        continue;
      case 'Voldemort':
        alert(`Has dicho el innombrable`);
        return alert(nombre);
      default: 
        nombre+=mago+'\n';
    }
  }
}

function comprador(){
  let producto;
  let lista=[
    {
      nombre:'Tomate',
      cantidad:0,
    },
    {
      nombre:'Papa',
      cantidad:0,
    },
    {
      nombre:'Carne',
      cantidad:0,
    },
    {
      nombre:'Pollo',
      cantidad:0,
    },
  ];
  do{
    producto=prompt(`Dime el numero del producto entre 1-4`);
    switch(producto){
      case 'ESC': 
      break;
      case '1':
        lista[0].cantidad++;
        continue;
      case '2':
        lista[1].cantidad++;
        continue;
      case '3':
        lista[2].cantidad++;
        continue;
      case '4':
        lista[3].cantidad++;
        continue;
      default:
        alert(`No existe ese producto`);
        continue;
    }
  }
  while(producto!='ESC');
  document.write(`
  <h1>Tu lista consta de:</h1>
  <ul>
    <li>${lista[0].cantidad} ${lista[0].nombre}</li>
    <li>${lista[1].cantidad} ${lista[1].nombre}</li>
    <li>${lista[2].cantidad} ${lista[2].nombre}</li>
    <li>${lista[3].cantidad} ${lista[3].nombre}</li>
  </ul>
  `)
}