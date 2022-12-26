import {Labels} from './Labels.jsx';
import './Formulario.css';

export const Formulario =()=>{
  let login=()=>{ 
    alert(`hola, te logueaste al hackintosh`)
  }
  return(
    <div>
      <h1>Formulario</h1>
      <form className='form'>
        <Labels type="text" placeholder="Nombre" className='nombre'/>
        <button type='submit' onClick={login}>Enviar</button>
      </form>
    </div>
  )
}