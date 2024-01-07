import { createContext, useContext, useState } from 'react'

export const DataContext = createContext()

export function AuthProvider({ children }) {
  const { isLoggedIn } = useContext(DataContext)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate.getDate() + 1)

  return (
    <DataContext.Provider
      value={{ startDate, setStartDate, endDate, setEndDate }}
    >
      {children}
    </DataContext.Provider>
  )
}
