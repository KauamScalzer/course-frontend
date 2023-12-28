import './Signup-styles.css'
import { useState } from 'react'
import api from './services/api'

function Login() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  async function handleCreate() {
    const response = await api.post('/user', {
      name: name,
      email,
      password,
      passwordConfirmation,
    })
    if (response.status === 201) {

    }
  }

  const isCreateButtonDisabled = !name || !email || !password || !passwordConfirmation;

  return (
    <div className="signup">
      <div className="signupInput">
        <h1>Crie sua conta</h1>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirmação da senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button
          className="create"
          onClick={handleCreate}
          disabled={isCreateButtonDisabled}
        >
          Criar
        </button>
      </div>
    </div>
  );
}

export default Login
