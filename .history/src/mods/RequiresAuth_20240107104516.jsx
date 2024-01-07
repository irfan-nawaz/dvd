import React from 'react'

function RequiresAuth() {
  return (
    <div>RequiresAuth</div>
  )
}

export default RequiresAuth

import { Navigate } from "react-router";

export function RequiresAuth({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}
