import React from 'react'
import './App.css'
import Form from './components/Form'
import 'axios'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <h1>Products</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Form />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
