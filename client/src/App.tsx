import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/navbar';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Login from './pages/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;