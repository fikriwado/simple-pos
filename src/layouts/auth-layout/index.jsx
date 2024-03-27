import '../layout/scss/_layout.scss'
import App from '../../App'

const AuthLayout = ({ children }) => {
  return (
    <App>
      <div className='content'>{children}</div>
    </App>
  )
}

export default AuthLayout
