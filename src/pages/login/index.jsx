import './scss/_login.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../../layouts'
import { logo } from '../../assets'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('support@technopartner.id')
  const [password, setPassword] = useState('1234567')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://soal.staging.id/oauth/token', {
        username: email,
        password: password,
        grant_type: 'password',
        client_id: 'e78869f77986684a',
        client_secret: '0a40f69db4e5fd2f4ac65a090f31b823'
      })

      const data = response.data
      localStorage.setItem('token_type', data.token_type)
      localStorage.setItem('access_token', data.access_token)
      setError(null)

      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      setError('Failed to login. Please try again.')
    }
  }

  return (
    <AuthLayout>
      <div className='tech-auth'>
        <img src={logo} className='tech-auth__logo' alt='' />

        <form onSubmit={handleSubmit}>
          <div className='tech-auth__form'>
            <div className='tech-auth__form--group'>
              <label htmlFor='email' className='tech-auth__form--label'>
                Email
              </label>
              <input id='email' className='tech-auth__form--input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='tech-auth__form--group'>
              <label htmlFor='password' className='tech-auth__form--label'>
                Password
              </label>
              <input
                id='password'
                className='tech-auth__form--input'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='tech-auth__form--group'>
              <button type='submit' className='tech-auth__form--submit'>
                Login
              </button>
            </div>
          </div>
        </form>

        {error && <div className='error-message'>{error}</div>}
      </div>
    </AuthLayout>
  )
}

export default Login
