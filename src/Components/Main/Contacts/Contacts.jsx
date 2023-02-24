import { Card, Col, Row } from 'antd'
import React from 'react'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import ContactForm from './ContactForm'
import { FaArrowRight } from 'react-icons/fa'
import { TbBrandTelegram, TbPhoneCall } from 'react-icons/tb'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { RiMailSendLine } from 'react-icons/ri'
import s from './Contacts.module.css'

export default function Contacts() {
   return (
      <div id="contacts">
         <SectionHeader title="Contacts" description="My contact information" />
         <Row gutter={[20, 20]}>
            <Col xs={24} sm={12}>
               <div className={s.text}>Talk to me</div>
               <Row justify="center" gutter={[0, 20]}>
                  <a href="mailto:svyryd2012@gmail.com">
                     <Card bordered={false} className="card" style={{ width: 300 }}>
                        <RiMailSendLine className={s.icon} />
                        <p>Email</p>
                        <p>svyryd2012@gmail.com</p>
                        <div className={s.button}>
                           Write me <FaArrowRight className={s.arrow} />
                        </div>
                     </Card>
                  </a>
                  <a href="https://t.me/d1m0n4ik_1" target="_blank" rel="noreferrer">
                     <Card bordered={false} className="card" style={{ width: 300 }}>
                        <TbBrandTelegram className={s.icon} />
                        <p>Telegram</p>
                        <p>@d1m0n4ik_1</p>
                        <div className={s.button}>
                           Write me <FaArrowRight className={s.arrow} />
                        </div>
                     </Card>
                  </a>
                  <a href="tel:+380974473766">
                     <Card bordered={false} className="card" style={{ width: 300 }}>
                        <TbPhoneCall className={s.icon} />
                        <p>Phone number</p>
                        <p>+380 974 473 766</p>
                        <div className={s.button}>
                           Call me <BsTelephoneOutbound className={s.arrow} />
                        </div>
                     </Card>
                  </a>
               </Row>
            </Col>
            <Col xs={24} sm={12}>
               <div className={s.text}>Contact me</div>
               <ContactForm />
            </Col>
         </Row>
      </div>
   )
}
