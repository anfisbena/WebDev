//VARIABLE DECLARATION
function heladoCompartido(){
  let heladoDisponible,vuelto,total,boleto,cantidadBoletos;
  let usuarios={
    us01:{name:'Roberto',money:0},
    us02:{name:'Pedro',money:0},
    us03:{name:'Cofla',money:0},
  }
  let helados={
    h1:{price:0.6,name:'Palito de helado de agua'},
    h2:{price:1,name:'Palito de helado con crema'},
    h3:{price:1.6,name:'Bombón de helado marca Heladix'},
    h4:{price:1.7,name:'Bombón de helado marca Heladovich'},
    h5:{price:1.8,name:'Bombón de helado marca Helardo'},
    h6:{price:2.9,name:'Potecito de helado con confites'},
    h7:{price:2.9,name:'Pote de 1/4 KG'},
  };

  //DEFINE HOW MUCH MONEY THE USER HAS
  for(let usuario in usuarios){
    usuarios[usuario].money=prompt(`ingresa cuanto tienes ${usuarios[usuario].name}`);
  }
  //DEFINE INDIVIDUALLY, WHICH HELADO THE USER CAN AFFORD
  for (let usuario in usuarios){ 
    if (usuarios[usuario].money<=0.6){heladoDisponible=`${usuarios[usuario].name}, andate mas bien que das es lastima`;}
    else if(usuarios[usuario].money>=2.9){heladoDisponible=`${usuarios[usuario].name}, Podes escoger entre ${helados.h7.name} y ${helados.h6.name}, ambos cuestan $2.9 y te dan un vuelto de $${(usuarios[usuario].money-2.9).toFixed(2)}`;}
    else{
      for(let helado in helados){
        if(usuarios[usuario].money<helados[helado].price){continue;}
        else{heladoDisponible=`${usuarios[usuario].name}, con tus ${usuarios[usuario].money} puedes comprarte un ${helados[helado].name}, que vale ${helados[helado].price} y te dan un vuelto de $${(usuarios[usuario].money-helados[helado].price).toFixed(2)}`;}
      }
    }
    document.write(`<h1>${heladoDisponible}</h1>`);
  };

  //DEFINE HOW MUCH THE GROUP HAVE
  total=parseFloat(usuarios.us01.money)+parseFloat(usuarios.us02.money)+parseFloat(usuarios.us03.money);

  if(total>=2.9){heladoDisponible=`podrían escoger entre ${helados.h7.name} y ${helados.h6.name}, este helado cuesta C/U $${helados.h7.price}, lo que deja un vuelto de $${(total-helados.h7.price).toFixed(2)}`;}
  else if(total>=1.8&&total<2.9){  heladoDisponible=`podrían escoger ${helados.h5.name}, este helado cuesta $${helados.h5.price}, lo que deja un vuelto de $${(total-helados.h5.price).toFixed(2)}`;}
  else if(total>=1.7&&total<1.8){  heladoDisponible=`podrían escoger ${helados.h4.name}, este helado cuesta $${helados.h4.price}, lo que deja un vuelto de $${(total-helados.h4.price).toFixed(2)}`;}
  else if(total>=1.6&&total<1.7){  heladoDisponible=`podrían escoger ${helados.h3.name}, este helado cuesta $${helados.h3.price}, lo que deja un vuelto de $${(total-helados.h3.price).toFixed(2)}`;}
  else if(total>=1&&total<1.6){  heladoDisponible=`podrían escoger ${helados.h2.name}, este helado cuesta $${helados.h2.price}, lo que deja un vuelto de $${(total-helados.h2.price).toFixed(2)}`;}
  else if(total>=0.6&&total<1){  heladoDisponible=`podrían escoger ${helados.h1.name}, este helado cuesta $${helados.h1.price}, lo que deja un vuelto de $${(total-helados.h1.price).toFixed(2)}`;}
  else{heladoDisponible=`No podrían escoger ningún helado`;}

  document.write(`<h1>Pero si reunen todo, en total tendrían $${(total).toFixed(2)}, ${heladoDisponible}</h1>`);
}

function arrays(){
  let pc1={
    nombre:"Dalto PC",
    procesador:"intel Core I7",
    ram:"16GB",
    espacio:"1TB",
  }
  document.write(`<h2>el nombre de mi PC es: <strong>${pc1.nombre}</strong><br/>
  y tiene un procesador <strong>${pc1.procesador}</strong>,<br/> 
  con memoria ram de <strong>${pc1.ram}</strong><br/>
  con un disco duro SSD de <strong>${pc1.espacio}</strong></h2>`)
}

function sumar(a,b){
  return a+b;
}

function discoteca(){
  let usuarios=[],nombre,edad,hora,trigger,pago;
  do{
    nombre=prompt("Ingresa tu nombre");
    edad=prompt("Ingresa tu edad");
    if(edad<18){
      alert("No puedes entrar");
      continue;};
    hora=parseInt(prompt("Ingresa la hora"));
    pago=hora>2&&hora<10?false:true;
    usuarios.push({
      nombre:nombre,
      edad:edad,
      hora:hora,
      pago:pago
    });
    trigger=prompt("¿Deseas ingresar un usuario? (y/n)");
  }
  while(trigger!="n");
  for (i in usuarios){
    document.write(`<h1>usuario #${i} Nombre: ${usuarios[i].nombre}, edad: ${usuarios[i].edad}, hora ingreso:${usuarios[i].hora} pago?:${usuarios[i].pago}</h1>`)
  }
}

function asistencia(){
  let estudiantes=[],nombre,asistencia,trigger;
  do{
    nombre=prompt("Ingresa nombre");
    asistencia=prompt('Estatus de asistencia (a/p)');
    if(asistencia=='p'){
      if(estudiantes.findIndex((est)=>est.nombre==nombre)==-1){
        estudiantes.push({
          nombre:nombre,
          asistencia:1,
        })
      }
      else{
        estudiantes[estudiantes.findIndex((est)=>est.nombre==nombre)].asistencia++;
      }
    }
    trigger=prompt("¿Deseas ingresar un usuario? (y/n)");
  }
  while(trigger!="n");
  document.write(`<h1>LISTA DE ASISTENCIA</h1><br/>`);
  for (i in estudiantes){
    document.write(
      `<p>${estudiantes[i].nombre} || ${estudiantes[i].asistencia} || ${((estudiantes[i].asistencia)/30)*100}%</p>`)
  }
}

//-----------------------INICIO
class Animal{
  constructor(pelo,ojos){
    this.pelo=pelo;
    this.ojos=ojos;
    this.info=`<h1>Este animal tiene pelo ${this.pelo} y ojos ${this.ojos}</h1>`;
  }
  verInfo(){
    document.write(this.info);
  }
}
class Perro extends Animal{
  constructor(pelo,ojos,raza){
    super(pelo,ojos);
    this.raza=raza
  }
  ladrar(){
    return `el ${this.raza} esta ladrando`;
  }
}

class gato extends Animal{
  constructor(nombre,raza,color,pelo,ojos){
    super(pelo,ojos);
    this.nombre=nombre;
    this.raza=raza;
    this.color=color;
  }
  explicar(){
    return `este ${this.nombre} es un ${this.raza} de color ${this.color} y tiene un pelo ${this.pelo}`;
  }
}

const perro=new Perro("largo","morados",'Labrador')
perro.verInfo();
let gato1=new gato("largo","cafe","Dara","Labrador");
document.write(gato1.explicar());
//-----------------------FIN

//-----------------------GETTERS Y SETTERS
class vaca extends Animal{
  constructor(pelo,ojos,raza){
    super(pelo,ojos);
    this.raza=raza
  }
  cambioRaza(nuevaRaza){
    this.raza=nuevaRaza;
  }

  /**
   * @param {string} nuevaRaza
   */
  set nuevoCambioRaza(nuevaRaza){
    this.raza=nuevaRaza;
  }
}
const lola=new vaca('largo','verdes','carechimba');
lola.cambioRaza('hijueputa'); //metodo NORMAL
lola.nuevoCambioRaza='hijueputa' //metodo SETTER


//-----------------------FIN GETTERS Y SETTERS
