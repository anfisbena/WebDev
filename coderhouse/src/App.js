import ItemListContainer from './components/Main/ItemContainer.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ItemDetail from './components/Main/Pages/ItemDetail.jsx';
//quede en min 37
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path=':categoria/:id' element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;