import { useState } from 'react'
import './App.css'
import HomePage from './pages/Homepage'
import ApiPage from './pages/ApiPage'
import UserPage from './pages/UserPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/api" element={<ApiPage/>}></Route>
      <Route path="/user" element={<UserPage/>}>
        <Route path="about" element={<AboutPage/>}></Route>
      </Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/profile/:id" element={<ProfilePage/>}></Route>
      <Route path="*" element={<NoPage/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}

export default App
