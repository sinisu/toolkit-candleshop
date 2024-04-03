import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';


function App() {

  return (
    <div className='background'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
