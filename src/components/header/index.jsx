import './scss/_header.scss'
import { logo } from '../../assets'

const Header = () => {
  return (
    <header className='tech-header'>
      <img src={logo} className='tech-header__logo' alt='logo' />
    </header>
  )
}

export default Header
