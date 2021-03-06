import './App.css';
import Navigation from './components/Navbar/Navigation';
import {  Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { ItemListContainer } from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Order from './components/Order/Order';

function App() {
  return (
    <CartProvider>
      <Router>
          <Navigation/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart/' element={<Cart/>}/>
            <Route path="/checkout" element={ <Order/>} />
            <Route path="*" element={ <Navigate to="/"/> } />
          </Routes>
        </Router>
    </CartProvider>
  );
}

export {App}
