import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './Components/Home.js';
import Signup from './Components/Signup.js';
import Login from './Components/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
