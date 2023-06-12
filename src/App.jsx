import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Index from './pages/index';
import Form from './pages/Form';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    // <Index />
    // <Form />
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={ <Form/> } />
      <Route path="/home" element={ <Index /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
