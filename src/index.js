import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Navbar from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, About, Contact } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
