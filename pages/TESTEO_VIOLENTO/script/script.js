const inputNombre=document.getElementById('nombre');
const inputApellido=document.getElementById('apellido');
const botonIngresar=document.getElementById('ingresar');
const divDatos=document.querySelector('#divDatos');
const divSaludo=document.querySelector('#divSaludo');
const divInversion=document.querySelector('#divInversion');
//Creo array de bancos y le ingreso sus tasas de interes
const bancos=[]
bancos.push=new banco('Bancolombia');
bancos.push=new banco('BBVA');
bancos.push=new banco('Banco de Bogota');
bancos.push=new banco('Banco de Occidente');
bancos.push=new banco('Davivienda');

//tipos de riesto

const riesgo=[
  {tipo:'Bajo',tasa:0.05},
  {tipo:'Medio',tasa:0.07},
  {tipo:'Alto',tasa:0.1},
];

//Genero clase banco y el metodo para calcular la tasa de interes
class banco{
  constructor(nombre){
    this.nombre=nombre;
    this.rendimiento=this.calcularRendimiento();
  }
  calcularRendimiento(){
    return Math.floor(Math.random()*20) + 1;
  }
}

//codigo para interactuar en HTML
botonIngresar.onclick=()=>{
  const usuario={
    nombre:inputNombre.value,
    apellido:inputApellido.value,
  }
  localStorage.setItem('usuario',JSON.stringify(usuario));
  divDatos.remove();
  crearSaludo(usuario);
  crearInversionDiv();
  const botonCalcular=document.querySelector('#botonCalcular');
  botonCalcular.onclick=()=>{
    const monto=document.getElementById('inputMonto').value;
    const tipoRiesgo=document.getElementById('selectRiesgo').value;
    const tasaRiesgo=riesgo.find((elemento)=>{elemento.tipo==tipoRiesgo}).tasa;
    bancos.forEach(banco=>{
      const rendimientoFinal=banco.rendimiento*tasaRiesgo;
      const utilidades=monto*rendimientoFinal;
      const parrafoBanco=document.createElement('p');
      parrafoBanco.innerText=`El banco ${banco.nombre} te da un rendimiento de ${rendimientoFinal} y te da un total de ${utilidades}`;
      parrafoBanco
    })
  }
}
