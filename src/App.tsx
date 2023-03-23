import { useState, lazy, Suspense } from 'react'
import './App.css'
import Loading from './Components/loading/Loading'
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import ErrorPage from './Components/Error'
const Login = lazy(()=> import('./Pages/Login'))
const Dashboard = lazy(()=> import('./Pages/Dashboard'))
const UserDetails = lazy(()=> import('./Pages/UserDetails'))

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
        <Route path='/dashboard' element={<Suspense fallback={<Loading/>}><Dashboard /></Suspense>} />
        <Route path='/dashboard/Userdetails/' element={<Suspense  fallback={<Loading/>}><UserDetails /></Suspense>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      </Router>

    </div>
  )
}

export default App
