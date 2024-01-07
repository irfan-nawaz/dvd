import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../main'

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to="/login" replace />
}


import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "..";

export function RequiresAuth({ children }) {
  let location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
