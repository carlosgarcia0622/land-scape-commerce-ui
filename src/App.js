import './App.css';
import Navigation from './components/navbar/Navigation';
import {  Routes, Route } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';

import Houses from './pages/Houses';
import Lots from './pages/Lots';
import Apartments from './pages/Apartments';
import { ItemListContainer } from './components/item-list-container/ItemListContainer';

function App() {
  return (
    <Router>
        <Navigation/>
        <ItemListContainer greeting='¡Hola! ¿Qué tal? Soy el chico de las poesías'/>
        <Routes>
          <Route path='/houses' element={<Houses/>}/>
          <Route path='/lots' element={<Lots/>}/>
          <Route path='/apartments' element={<Apartments/>}/>
        </Routes>
      </Router>
  );
}

export {App}
