import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext, AuthProvider } from './contexts/AuthContext.jsx'
export { AuthContext }
import 'react-datepicker/dist/react-datepicker.css'
import { DataContext, DataProvider } from './contexts/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <DataProvider>
      <App />
      
    </AuthProvider>
  </BrowserRouter>,
)
