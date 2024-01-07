import { Navigate } from 'react-router'
impo

export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />
}
