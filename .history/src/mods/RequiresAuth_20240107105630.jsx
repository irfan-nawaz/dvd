import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Navigate } from 'react-router'
import { AuthContext } from '..'
AuthContext

export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />
}
