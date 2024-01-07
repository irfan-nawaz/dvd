import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '..'
AuthContext

export function RequiresAuth({ children, isLoggedIn }) {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to="/login" replace />
}
