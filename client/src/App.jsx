import React from 'react'
import './App.css'
import 'axios'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import Display from './components/Display'
import Update from './components/Update'
function App() {
  
  return (
    <>
      <h1>Products</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<Display/>} path="/products/:id" />
          <Route element={<Update/>} path="/products/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
