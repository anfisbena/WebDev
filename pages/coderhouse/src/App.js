import logo from './logo.svg';
import './App.css';
import './modules/Formulario.jsx';
import { Formulario } from './modules/Formulario.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario/>
      </header>
    </div>
  );
}

export default App;
