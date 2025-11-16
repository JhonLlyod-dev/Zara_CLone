import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Routing from './Components/Routing';
import View from './Pages/View';
import Account from './Pages/Account';
import Cart from './Pages/Cart';


function App() {


  return (
    <Router>
      <Routes>
        <Route  />
        <Route element={<Routing/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:category/:search?" element={<Products/>} />
          <Route path="/view/:id" element={<View/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Route>

        
      </Routes>
    </Router>
  )
}

export default App
