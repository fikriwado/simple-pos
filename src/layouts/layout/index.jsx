import './scss/_layout.scss'
import App from '../../App'
import { Header, Footer } from '../../components'

const Layout = ({ children }) => {
  return (
    <App>
      <Header />
      <div className='content'>{children}</div>
      <Footer />
    </App>
  )
}

export default Layout
