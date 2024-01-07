import { createContext, useState } from 'react'

export const DateContext = createContext()

export function AuthProvider({ children }) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate.getDate() + 1)

  return (
    <DateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </DateContext.Provider>
  )
}
