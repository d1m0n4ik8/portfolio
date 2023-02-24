import React from 'react'
import s from './AboutMe.module.css'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import myPhoto from '../../../assets/images/my_photo2.jpg'
import Way from './Way'
import { Col, Row } from 'antd'
import Info from './Info'
import MyButton from '../../UIcomponents/MyButton/MyButton'
import { HiOutlineDownload } from 'react-icons/hi'

export default function AboutMe() {
   return (
      <div className={s.aboutMe} id="about">
         <SectionHeader title="About me" description="My introduction" />
         <Row gutter={[10, 20]}>
            <Col xs={24} sm={24} md={10} style={{ textAlign: 'center' }}>
               <img className={s.photo} src={myPhoto} alt="My_photo" />
            </Col>
            <Col xs={24} sm={24} md={14}>
               <Info />
               <div className={s.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga velit qui aliquid delectus
                  neque, et hic, vel ipsam voluptates ducimus enim est. Aliquid quia suscipit odit. Assumenda, harum
                  itaque!
               </div>
               <div>
                  <MyButton transparentbutton="true">
                     Download CV <HiOutlineDownload />
                  </MyButton>
               </div>
            </Col>
         </Row>
         <Way />
      </div>
   )
}
