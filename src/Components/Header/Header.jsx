import { Anchor, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import HeaderMenu from './HeaderMenu'
import './Header.css'

export default function Header() {
   const [scroll, setScroll] = useState(false)
   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScroll(window.scrollY > 0)
      })
   }, [])
   return (
      <header className="header">
         <div className={scroll ? 'header__menu shadow' : 'header__menu'}>
            <Anchor
               affix={false}
               items={[
                  {
                     key: 'Dima Svyryd',
                     href: '#home',
                     title: <div className="header__logo">Dmytro Svyryd</div>,
                  },
               ]}
            />
            <Row justify="end">
               <HeaderMenu />
            </Row>
         </div>
      </header>
   )
}
