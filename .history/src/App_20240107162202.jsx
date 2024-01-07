import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'
import Login from './pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from './main'
import { RequiresAuth } from './mods/RequiresAuth'

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    navigate(location?.state?.from?.pathname)
  }
  const queryParameters = new URLSearchParams(window.location.search)
  let params = useParams()
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
