import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'
import Login from './pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from './main'

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <>
      <button onClick={handleLogin}>{isLoggedIn ? 'logout' : 'login'} </button>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
