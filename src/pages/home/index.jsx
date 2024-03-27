import './scss/_home.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Layout } from '../../layouts'
import { Header } from '../../components'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { isLoggedIn, getTokenType, getAccessToken } = useAuth()
  const [toggleQrCode, setToggleQrCode] = useState(false)
  const [dataHome, setDataHome] = useState(null)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://soal.staging.id/api/home', {
          headers: {
            Authorization: `${getTokenType} ${getAccessToken}`
          }
        })
        setDataHome(data.result)
        console.log(data.result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData().then((r) => r)
  }, [getTokenType, getAccessToken])

  return (
    <Layout>
      <Header />
      {dataHome ? (
        <section className='tech-saldo'>
          <div className='tech-saldo__card'>
            <div className='tech-saldo__card--greeting'>{dataHome.greeting},</div>
            <div className='tech-saldo__card--name'>{dataHome.name}</div>
            <div className='tech-saldo__detail'>
              <div className='tech-saldo__detail--left'>
                <div className='tech-saldo__left--qrcode'>
                  <img src={dataHome.qrcode} onClick={() => setToggleQrCode(!toggleQrCode)} alt='qrcode' />
                </div>
              </div>
              <div className='tech-saldo__detail--right'>
                <div className='tech-saldo__right--value'>
                  <span>Saldo</span>
                  <span>Rp {dataHome.saldo.toLocaleString('id-ID')}</span>
                </div>
                <div className='tech-saldo__right--value tech-points'>
                  <span>Points</span>
                  <span>{dataHome.point.toLocaleString('id-ID')}</span>
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
              <img src={dataHome.qrcode} className='tech-qrcode__content--img' alt='qrcode' />
            </div>
          </div>
        </section>
      ) : (
        'loading'
      )}
    </Layout>
  )
}

export default Home
