import './scss/_menu.scss'
import { useEffect, useState } from 'react'
import { Layout } from '../../layouts'
import { HeaderText } from '../../components'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import axios from 'axios'

const Menu = () => {
  const navigate = useNavigate()
  const { isLoggedIn, getTokenType, getAccessToken } = useAuth()
  const [dataMenu, setDataMenu] = useState(null)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post(
          'https://soal.staging.id/api/menu',
          {},
          {
            headers: {
              Authorization: `${getTokenType} ${getAccessToken}`
            }
          }
        )
        setDataMenu(data.result)
        console.log(data.result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData().then((r) => r)
  }, [getTokenType, getAccessToken])

  return (
    <Layout>
      <HeaderText text='MENU' />
      {dataMenu
        ? dataMenu.categories.map((item) => (
            <section className='tech-products' key={item.category_name}>
              <p className='tech-products__category'>{item.category_name}</p>
              {item.menu.map((menu) => (
                <div className='tech-products__item' key={menu.name}>
                  <div className='tech-products__item--img'>
                    <img src={menu.photo} alt='' />
                  </div>
                  <div className='tech-products__item--content'>
                    <div className='tech-products__item--title'>{menu.name}</div>
                    <div className='tech-products__item--desc'>Lorem ipsum dolor sit amet consectetur adipis icing.</div>
                  </div>
                  <div className='tech-products__item--price'>{menu.price}</div>
                </div>
              ))}
            </section>
          ))
        : 'Loading'}
    </Layout>
  )
}

export default Menu
