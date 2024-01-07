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
  let params = useParams()
  console.log(params)
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
