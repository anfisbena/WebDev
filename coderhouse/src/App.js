import ItemListContainer from './components/Main/index.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ProductTemplate from './components/Main/Pages/ProductTemplate.jsx';
//quede en min 37
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item' element={<ProductTemplate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;