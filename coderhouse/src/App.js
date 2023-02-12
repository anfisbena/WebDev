import ItemListContainer from './components/Main/ItemListContainer.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ItemDetail from './components/Main/Pages/ItemDetail.jsx';
import CheckOut from './components/Main/Pages/CheckOut.jsx';
import CartProvider from './context/CartProvider.jsx';
import NavBar from './components/Header/NavBar.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path=':categoria/:id' element={<ItemDetail/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;