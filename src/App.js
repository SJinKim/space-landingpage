import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Destination, Technology, Crew } from './container'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/destination'
          element={<Destination title='moon' avg='384,400 KM' traveltime='3 DAYS' />}
        >
          <Route
            path='/destination/moon'
            element={<Destination title='Moon' avg='384,400 KM' traveltime='3 DAYS' />}
          />
          <Route
            path='/destination/mars'
            element={<Destination title='mars' avg='225 MIL. KM' traveltime='9 MONTHS' />}
          />
          <Route
            path='/destination/europa'
            element={<Destination title='europa' avg='628 MIL. KM' traveltime='3 YEARS' />}
          />
          <Route
            path='/destination/titan'
            element={<Destination title='titan' avg='1.6 BIL. KM' traveltime='7 YEARS' />}
          />
        </Route>
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
