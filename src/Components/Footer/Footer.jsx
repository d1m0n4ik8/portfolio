import { Anchor, Col, Row, Space } from 'antd'
import React from 'react'
import { BsTelegram, BsGithub, BsLinkedin, BsBriefcaseFill, BsFillPersonFill } from 'react-icons/bs'
import { RiCodeSSlashFill } from 'react-icons/ri'

import s from './Footer.module.css'

const FooterComponent = () => {
   return (
      <footer className={s.footer}>
         <Row gutter={[20, 20]} align="middle">
            <Col xs={24} sm={24} md={8} className="header__logo" style={{ textAlign: 'center' }}>
               <Anchor
                  affix={false}
                  items={[
                     {
                        key: 'Dima Svyryd',
                        href: '#home',
                        title: <div className="header__logo">Dmytro Svyryd</div>,
                     },
                     {
                        key: 'Frontend developer',
                        href: '#home',
                        title: (
                           <div className="header__logo" style={{ fontSize: 20 }}>
                              Frontend developer
                           </div>
                        ),
                     },
                  ]}
               />
            </Col>
            <Col xs={24} sm={24} md={8}>
               <Row justify="center">
                  <Anchor
                     affix={false}
                     className={s.links__inner}
                     items={[
                        {
                           key: 'about',
                           href: '#about',
                           title: (
                              <Space className="menu__item">
                                 <BsFillPersonFill />
                                 About
                              </Space>
                           ),
                        },
                        {
                           key: 'skills',
                           href: '#skills',
                           title: (
                              <Space className="menu__item">
                                 <RiCodeSSlashFill />
                                 Skills
                              </Space>
                           ),
                        },
                        {
                           key: 'portfolio',
                           href: '#portfolio',
                           title: (
                              <Space className="menu__item">
                                 <BsBriefcaseFill />
                                 Portfolio
                              </Space>
                           ),
                        },
                     ]}
                  />
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
            <Col span={24} className={s.bottomText}>
               <Row justify="space-around" align="middle">
                  © Develop by Dmytro Svyryd. All right reserved
               </Row>
            </Col>
         </Row>
      </footer>
   )
}
export default FooterComponent
