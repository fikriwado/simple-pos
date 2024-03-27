import './scss/_menu.scss'
import { Layout } from '../../layouts'
import { HeaderText } from '../../components'
import { coffee } from '../../assets'

const Menu = () => {
  const menus = [
    {
      category: 'Best Seller',
      menus: [
        { title: 'Latte Fredo', price: '39.000' },
        { title: 'Vanilla Latte', price: '45.000' },
        { title: 'Green Tea Latte', price: '47.000' }
      ]
    },
    {
      category: 'Coffee',
      menus: [
        { title: 'Latte Fredo', price: '39.000' },
        { title: 'Vanilla Latte', price: '45.000' },
        { title: 'Green Tea Latte', price: '47.000' }
      ]
    },
    {
      category: 'Others',
      menus: [
        { title: 'Latte Fredo', price: '39.000' },
        { title: 'Vanilla Latte', price: '45.000' },
        { title: 'Green Tea Latte', price: '47.000' }
      ]
    }
  ]
  return (
    <Layout>
      <HeaderText text='MENU' />
      {menus.map((item) => (
        <section className='tech-products' key={item.category}>
          <p className='tech-products__category'>{item.category}</p>
          {item.menus.map((menu) => (
            <div className='tech-products__item' key={menu.title}>
              <div className='tech-products__item--img'>
                <img src={coffee} alt='' />
              </div>
              <div className='tech-products__item--content'>
                <div className='tech-products__item--title'>{menu.title}</div>
                <div className='tech-products__item--desc'>
                  Lorem ipsum dolor sit amet consectetur adipis asd asd icing elit. Nobis quod cumque corrupti earum molestias excepturi?
                </div>
              </div>
              <div className='tech-products__item--price'>{menu.price}</div>
            </div>
          ))}
        </section>
      ))}
    </Layout>
  )
}

export default Menu
