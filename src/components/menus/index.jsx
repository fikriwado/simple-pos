import './scss/_menus.scss'
import { NavLink } from 'react-router-dom'
import { home, menu, homeActive, menuActive } from '../../assets'

const Menus = () => {
  const menus = [
    { name: 'Home', icon: home, iconActive: homeActive, path: '/' },
    { name: 'Menu', icon: menu, iconActive: menuActive, path: '/menu' }
  ]
  return (
    <div className='tech-menus-wrapper'>
      <nav className='tech-menus'>
        {menus.map((menu) => (
          <ul key={menu.name}>
            <li className='tech-menus__item'>
              <NavLink to={menu.path} className='tech-menus__item--link' {...({ isActive }) => (isActive ? 'active' : '')}>
                {({ isActive }) => (
                  <>
                    <img src={isActive ? menu.iconActive : menu.icon} className='tech-menus__item--img' alt={menu.name} />
                    <label className='tech-menus__item--label'>{menu.name}</label>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  )
}

export default Menus
