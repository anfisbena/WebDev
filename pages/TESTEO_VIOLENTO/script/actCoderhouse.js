//CLASE 1
let identification={
  nombre:"",
  apellido:"",
  ciudad:"",
  pais:"",
  edad:"",
}
function ciudades(){
  const ciudad1=prompt(`Dime una ciudad`);
  const ciudad2=prompt(`Dime otra ciudad`);
  const ciudad3=prompt(`Dime otra ciudad`);
  const ciudad4=prompt(`Dime otra ciudad`);
  const ciudad5=prompt(`Dime la ultima ciudad`);
}

function carnet(){
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
  let personaje;
  switch(personaje){
    case 1:return(`<h1>Elegiste a Homero</h1>`);
    case 2:return(`<h1>Elegiste a Marge</h1>`);
    case 3:return(`<h1>Elegiste a Bart</h1>`);
    case 4:return(`<h1>Elegiste a Lisa</h1>`);
  }
}