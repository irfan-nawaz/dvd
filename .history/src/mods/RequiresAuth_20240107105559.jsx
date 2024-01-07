import { Navigate } from 'react-router'
AuthC

export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />
}
