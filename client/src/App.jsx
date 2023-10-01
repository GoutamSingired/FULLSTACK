import React from 'react'
import './App.css'
import 'axios'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import Display from './components/Display'

function App() {
  
  return (
    <>
      <h1>Products</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />}/>
          <Route element={<Display/>} path="/products/:id" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
