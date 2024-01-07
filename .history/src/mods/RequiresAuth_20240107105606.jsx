import { Navigate } from 'react-router'
import { AuthContext } from '..'
AuthContext

export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />
}
