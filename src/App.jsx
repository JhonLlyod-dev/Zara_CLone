import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Routing from './Components/Routing';


function App() {


  return (
    <Router>
      <Routes>
        <Route  />
        <Route element={<Routing/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:category?" element={<Products/>} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
