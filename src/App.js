import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Destination, Technology, Crew } from './container'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
