import React from 'react'
import s from './AboutMe.module.css'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import myPhoto from '../../../assets/images/my_photo2.jpg'
import resume from '../../../assets/Svyryd_Dmytro_Frontend_developer_Resume.pdf'
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
                  I am a quick learner and able to quickly adapt to new projects and technologies. I strive to develop
                  my skills and constantly improve my knowledge in the field of web technologies.
               </div>
               <div>
                  <a href={resume} download="Svyryd_Dmytro_Frontend_developer_Resume.pdf">
                     <MyButton transparentbutton="true">
                        My resume <HiOutlineDownload />
                     </MyButton>
                  </a>
               </div>
            </Col>
         </Row>
         <Way />
      </div>
   )
}
