import React from 'react'
import s from './Skills.module.css'
import Sertificats from './Certificats/Certificats'
import { Col, Row, Space } from 'antd'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export default function Skills() {
   return (
      <div className={s.skills} id="skills">
         <SectionHeader title="Skills" description="My technical level" />
         <Row gutter={[16, 16]} justify="space-between">
            <Col xs={24} sm={24} md={11} className={s.card}>
               <div className={s.card__info}>
                  <Row gutter={[0, 16]}>
                     <Col span={24} className={s.card__header}>
                        Frontend
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           HTML
                        </Space>
                        <div>Experienced</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           CSS
                        </Space>
                        <div>Experienced</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           JavaScript
                        </Space>
                        <div>Experienced</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           React
                        </Space>
                        <div>Skillful</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Redux
                        </Space>
                        <div>Skillful</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Bootstrap
                        </Space>
                        <div>Skillful</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Ant Design
                        </Space>
                        <div>Experienced</div>
                     </Col>
                  </Row>
               </div>
            </Col>
            <Col xs={24} sm={24} md={11} className={s.card}>
               <div className={s.card__info}>
                  <Row gutter={[0, 16]} justify="space-between">
                     <Col span={24} className={s.card__header}>
                        Additional
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Git
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           SQL
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Rest API
                        </Space>
                        <div>Basic</div>
                     </Col>
                  </Row>
               </div>
            </Col>
         </Row>
         <Sertificats />
      </div>
   )
}
