import './App.css';
import Navigation from './components/Navbar/Navigation';
import {  Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { ItemListContainer } from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart/' element={<Cart/>}/>
          <Route path="*" element={ <Navigate to="/"/> } />
        </Routes>
      </Router>
  );
}

export {App}
