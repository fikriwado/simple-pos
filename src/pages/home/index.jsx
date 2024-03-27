import './scss/_home.scss'
import { Layout } from '../../layouts'
import { qrcode } from '../../assets'

const Home = () => {
  return (
    <Layout>
      <section className='tech-saldo'>
        <div className='tech-saldo__card'>
          <div className='tech-saldo__card--greeting'>Good Afternoon,</div>
          <div className='tech-saldo__card--name'>Guntur Saputro</div>
          <div className='tech-saldo__detail'>
            <div className='tech-saldo__detail--left'>
              <div className='tech-saldo__left--qrcode'>
                <img src={qrcode} alt='' />
              </div>
            </div>
            <div className='tech-saldo__detail--right'>
              <div className='tech-saldo__right--value'>
                <span>Saldo</span>
                <span>Rp 279.000</span>
              </div>
              <div className='tech-saldo__right--value tech-points'>
                <span>Points</span>
                <span>2.500</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
