import { Card, Col, Row } from 'antd'
import React from 'react'
import MyButton from '../../UIcomponents/MyButton/MyButton'
import s from './Portfolio.module.css'

const ProjectItem = (props) => {
   return (
      <Col xs={24} sm={12} md={8}>
         <Card bordered={false} className={s.card}>
            <img className={s.card__image} src={props.image} alt="project" />
            <div className={s.card__title}>{props.title}</div>
            <Row gutter={[16, 16]}>
               <Col span={12}>
                  <a href={props.github}>
                     <MyButton transparentbutton="true" style={{ width: '100%', fontSize: 16 }}>
                        Github
                     </MyButton>
                  </a>
               </Col>
               <Col span={12}>
                  <a href={props.demo}>
                     <MyButton style={{ width: '100%', fontSize: 16 }}>Live Demo</MyButton>
                  </a>
               </Col>
            </Row>
         </Card>
      </Col>
   )
}
export default ProjectItem
