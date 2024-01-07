// import { Navigate } from 'react-router'


export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />
}
