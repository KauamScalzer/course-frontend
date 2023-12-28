import './login-styles.css'
import { useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    const response = await api.post('/user/authentication', {
      email,
      password
    })
    if (response.status === 200) {
      goToHomePage()
    }
  }

  const navigate = useNavigate()
  const goToRegisterPage = () => {
    navigate('/signup')
  }
  const goToHomePage = () => {
    navigate('/home')
  }

  const isLoginButtonDisabled =  !email || !password

  return (
    <div className="login">
      <div className="loginInput">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isLoginButtonDisabled}
        >
          Login
        </button>

        <button
          className="registerButton"
          onClick={goToRegisterPage}
        >
          Registrar
        </button>
      </div>
    </div>
  );
}

export default LoginPage
