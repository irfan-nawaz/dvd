import { Routes, Route, Link, Navigate } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'
import Login from './pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from './main'
import { RequiresAuth } from './mods/RequiresAuth'

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    Navigate(location?.state?.from?.pathname)
  }
  return (
    <>
      <button onClick={handleLogin}>{isLoggedIn ? 'logout' : 'login'} </button>
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <DashBoard />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
