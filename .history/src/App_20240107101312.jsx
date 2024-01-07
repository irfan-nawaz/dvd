import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'

function App() {
  return (
    <>
      <Routes>
        <Route Component={<DashBoard />} />
      </Routes>
    </>
  )
}

export default App
