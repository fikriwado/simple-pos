import App from '../../App'
import { Menus } from '../../components'

const Layout = ({ children }) => {
  return (
    <App>
      <div className='content'>{children}</div>
      <Menus />
    </App>
  )
}

export default Layout
