import { useState } from 'react'
import './App.css'
import HomePage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}

export default App
