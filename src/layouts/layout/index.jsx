import App from '../../App'
import { Header, Menus } from '../../components'

const Layout = ({ children }) => {
  return (
    <App>
      <Header />
      <div className='content'>{children}</div>
      <Menus />
    </App>
  )
}

export default Layout
