import './scss/_home.scss'
import { Layout } from '../../layouts'
import { qrcode } from '../../assets'
import { useState } from 'react'

const Home = () => {
  const [toggleQrCode, setToggleQrCode] = useState(false)

  return (
    <Layout>
      <section className='tech-saldo'>
        <div className='tech-saldo__card'>
          <div className='tech-saldo__card--greeting'>Good Afternoon,</div>
          <div className='tech-saldo__card--name'>Guntur Saputro</div>
          <div className='tech-saldo__detail'>
            <div className='tech-saldo__detail--left'>
              <div className='tech-saldo__left--qrcode'>
                <img src={qrcode} onClick={() => setToggleQrCode(!toggleQrCode)} alt='qrcode' />
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
        <div className={'tech-qrcode' + (toggleQrCode ? ' active' : '')}>
          <div className='tech-qrcode__toggle--close' onClick={() => setToggleQrCode(!toggleQrCode)}>
            &#x2715;
          </div>
          <div className='tech-qrcode__content'>
            <p className='tech-qrcode__content--label'>Show the QR Code below to the cashier</p>
            <img src={qrcode} className='tech-qrcode__content--img' alt='qrcode' />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
