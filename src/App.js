import './App.css';
import Navigation from './components/Navbar/Navigation';
import {  Routes, Route } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';

import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Navigation/>
        <Routes>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/sell' element={<Sell/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export {App}
