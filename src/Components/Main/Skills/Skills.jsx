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
                        Frontend developer
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           HTML
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           CSS
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           JavaScript
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           React
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Bootstrap
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Ant design
                        </Space>
                        <div>Basic</div>
                     </Col>
                     <Col span={12} className={s.card__col}>
                        <Space>
                           <BsFillPatchCheckFill />
                           Git
                        </Space>
                        <div>Basic</div>
                     </Col>
                  </Row>
               </div>
            </Col>
            <Col xs={24} sm={24} md={11} className={s.card}>
               <div className={s.card__info}>
                  <Row gutter={[0, 16]} justify="space-between">
                     <Col span={24} className={s.card__header}>
                        Backend developer
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
                           Redux
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
