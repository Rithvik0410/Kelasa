import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import Home from './Components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
