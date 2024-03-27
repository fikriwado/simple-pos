import App from '../../App'

const Layout = ({ children }) => {
  return (
    <App>
      <div className='container'>{children}</div>
    </App>
  )
}

export default Layout
