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

function productos(){
  let lista=[]
  for (let i = 0; i < 4; i++) {
    while (lista[i]==null||lista[i]==""){
      lista[i]=prompt(`Porfavor ingresa un producto`);
    }
  }
  document.write(`<h1>tu lista de productos es, ${lista[0]}, ${lista[1]}, ${lista[2]} y ${lista[3]}</h1>`);
}