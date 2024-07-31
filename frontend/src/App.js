import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout} from './Layout'; 
import {Home} from './components/Home';
import  {Registration} from './components/Registration';
import { Login } from './components/Login';
import { Capm } from './components/Capm';


export function App() {
  return (
    <BrowserRouter>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration/>} />
          <Route path= "/login" element={<Login/>} />
          <Route path= "/capm" element={<Capm/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}