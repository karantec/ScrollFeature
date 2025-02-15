import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboards from './components/Dashboards'
import SignIn from './components/Sigin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboards />} />
        <Route path="/Sign" element={<SignIn />} />
        </Routes>

      
    </div>
  )
}

export default App
