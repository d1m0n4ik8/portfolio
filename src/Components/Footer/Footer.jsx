import { Col, Row } from 'antd'
import React from 'react'
import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs'

import s from './Footer.module.css'

const FooterComponent = () => {
   return (
      <footer className={s.footer}>
         <Row gutter={[20, 15]}>
            <Col xs={24} sm={24} md={8} className="header__logo" style={{ textAlign: 'center' }}>
               <a href="#home">
                  <div>Dima Svyryd</div>
                  <div style={{ fontSize: 20 }}>Frontend developer</div>
               </a>
            </Col>
            <Col xs={24} sm={24} md={8} className={s.links}>
               <Row justify="center">
                  <a href="#about" className="menu__item">
                     About
                  </a>
                  <a href="#portfolio" className="menu__item">
                     Portfolio
                  </a>
                  <a href="#contacts" className="menu__item">
                     Contacts
                  </a>
               </Row>
            </Col>
            <Col xs={24} sm={24} md={8}>
               <Row justify="space-around" align="middle" className={'h100 ' + s.links}>
                  <a href="https://github.com/d1m0n4ik8" target="_blank" rel="noreferrer">
                     <BsGithub />
                  </a>
                  <a href="https://t.me/d1m0n4ik_1" target="_blank" rel="noreferrer">
                     <BsTelegram />
                  </a>
                  <a href="https://www.linkedin.com/in/dima-svyryd-687855242/" target="_blank" rel="noreferrer">
                     <BsLinkedin />
                  </a>
               </Row>
            </Col>
         </Row>
      </footer>
   )
}
export default FooterComponent
