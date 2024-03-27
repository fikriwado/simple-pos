import './scss/_layout.scss'
import App from '../../App'
import { Menus } from '../../components'
import { useEffect, useRef } from 'react'

const Layout = ({ children }) => {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return

    const content = contentRef.current.getBoundingClientRect()
    const menu = contentRef.current.closest('.App').querySelector('.tech-menus-wrapper').getBoundingClientRect()

    if (content.height > menu.top) {
      contentRef.current.classList.add('with-margin-bottom')
    }
  }, [contentRef])

  return (
    <App>
      <div className='content' ref={contentRef}>
        {children}
      </div>
      <Menus />
    </App>
  )
}

export default Layout
