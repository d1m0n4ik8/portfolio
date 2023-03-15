import { Anchor, Col, Row, Tooltip } from 'antd'
import React from 'react'
import myPhoto from '../../../assets/images/my_photo1.jpg'
import { RiGithubFill, RiLinkedinBoxFill, RiTelegramFill } from 'react-icons/ri'
import { BiSend } from 'react-icons/bi'
import { GiHand } from 'react-icons/gi'
import { SiCodewars } from 'react-icons/si'
import s from './Intro.module.css'
import MyButton from '../../UIcomponents/MyButton/MyButton'

export default function Intro() {
   return (
      <section className={s.intro} id="home">
         <Row className={s.intro__inner + ' w100'}>
            <Col order="1" span={2} className={s.intro__icons}>
               <Tooltip title="Github" placement="left">
                  <a href="https://github.com/d1m0n4ik8" className={s.intro__icon} target="_blank" rel="noreferrer">
                     <RiGithubFill />
                  </a>
               </Tooltip>
               <Tooltip title="Telegram" placement="left">
                  <a href="https://t.me/d1m0n4ik_1" className={s.intro__icon}>
                     <RiTelegramFill />
                  </a>
               </Tooltip>
               <Tooltip title="LinkedIn" placement="left">
                  <a
                     href="https://www.linkedin.com/in/dima-svyryd-687855242"
                     className={s.intro__icon}
                     target="_blank"
                     rel="noreferrer">
                     <RiLinkedinBoxFill style={{ borderRadius: '50%' }} />
                  </a>
               </Tooltip>
               <Tooltip title="CodeWars" placement="left">
                  <a
                     href="https://www.codewars.com/users/d1m0n4ik8"
                     className={s.intro__icon}
                     target="_blank"
                     rel="noreferrer">
                     <SiCodewars style={{ borderRadius: '50%' }} />
                  </a>
               </Tooltip>
            </Col>
            <Col
               xs={{ span: 24, order: 3 }}
               sm={{ span: 24, order: 3 }}
               md={{ span: 12, order: 2 }}
               className={s.intro__descriprion}>
               <div className={s.intro__title}>
                  Hi, I'm Dima <GiHand />
               </div>
               <div>
                  <div className={s.intro__about}>
                     A Front-End Developer with high-level experience specializing in web development, HTML, CSS,
                     JavaScript, React, Redux, Bootstrap and Ant Design.
                  </div>
                  <Anchor
                     style={{ marginLeft: -16 }}
                     affix={false}
                     items={[
                        {
                           key: 'intro',
                           href: '#contacts',
                           title: (
                              <MyButton transparentbutton="true">
                                 Contact me <BiSend />
                              </MyButton>
                           ),
                        },
                     ]}
                  />
               </div>
            </Col>
            <Col xs={{ span: 22, order: 0 }} sm={{ span: 22, order: 0 }} md={{ span: 10, order: 3 }}>
               <Row justify="center">
                  <img className={s.intro__photo} src={myPhoto} alt="My_photo" />
               </Row>
            </Col>
         </Row>
      </section>
   )
}
