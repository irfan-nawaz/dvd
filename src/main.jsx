import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext, AuthProvider } from './contexts/AuthContext.jsx'
import { DataContext, DataProvider } from './contexts/DataContext.jsx'
export { AuthContext, DataContext }
import 'react-datepicker/dist/react-datepicker.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </BrowserRouter>,
)