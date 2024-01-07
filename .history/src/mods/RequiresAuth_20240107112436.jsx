import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../main'

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to="/login" replace />
}
