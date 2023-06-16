import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import Sobre from "./pages/Sobre.jsx"
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobre' element={<Sobre />} />
    </Routes>
  </BrowserRouter>
)
