// import { Navigate } from 'react-router'

Navigate

export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />
}
