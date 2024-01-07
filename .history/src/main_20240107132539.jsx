import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext, AuthProvider } from './contexts/AuthContext.jsx'
export { AuthContext }
import 'react-datepicker/dist/react-datepicker.css'
import { DataContext,Data } from './contexts/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
