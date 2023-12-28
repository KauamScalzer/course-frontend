import LoginPage from './pages/login/login-page'
import SignupPage from './pages/signup/signup-page'
import HomePage from './pages/home/home-page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<LoginPage />} />
        <Route path ='/signup' element={<SignupPage />} />
        <Route path ='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
