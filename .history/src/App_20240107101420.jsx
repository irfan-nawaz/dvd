import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'
import Login from './pages/login/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={<DashBoard />} />
        <Route  Component={<Login />} />
      </Routes>
    </>
  )
}

export default App
