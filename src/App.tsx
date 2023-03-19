import { useState, lazy } from 'react'
import './App.css'
// import Login from './Pages/Login'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
const Login = lazy(()=> import('./Pages/Login'))
const Dashboard = lazy(()=> import('./Pages/Dashboard'))

function App() {
  

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </Router>

    </div>
  )
}

export default App
