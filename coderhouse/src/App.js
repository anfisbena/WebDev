import ItemListContainer from './components/Main/ItemListContainer.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ItemDetail from './components/Main/Pages/ItemDetail.jsx';
import CheckOut from './components/Main/Pages/CheckOut.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path=':categoria/:id' element={<ItemDetail/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;