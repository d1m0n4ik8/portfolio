import React from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import { BsFillAwardFill, BsBriefcaseFill } from 'react-icons/bs'
import { MdMenuBook } from 'react-icons/md'
import s from './AboutMe.module.css'

const formatter = (value) => (
   <CountUp delay={0} start={0} end={value}>
      {({ countUpRef, start }) => (
         <div>
            <VisibilitySensor onChange={start} delayedCall>
               <span ref={countUpRef} />
            </VisibilitySensor>
         </div>
      )}
   </CountUp>
)

export default function Info() {
   return (
      <Row gutter={[16, 16]}>
         <Col xs={24} sm={8}>
            <Card bordered={false} className="card shadow">
               <Statistic
                  title={
                     <div className={s.statistic}>
                        <BsFillAwardFill className={s.statistic__icon} />
                        Experience
                     </div>
                  }
                  value={1}
                  formatter={formatter}
                  valueStyle={{ color: 'var(--text-color)', textAlign: 'center' }}
                  suffix="+"
               />
               Years <br />
               experience
            </Card>
         </Col>
         <Col xs={24} sm={8}>
            <Card bordered={false} className="card shadow">
               <Statistic
                  title={
                     <div className={s.statistic}>
                        <BsBriefcaseFill className={s.statistic__icon} />
                        Portfolio
                     </div>
                  }
                  value={10}
                  formatter={formatter}
                  valueStyle={{ color: 'var(--text-color)', textAlign: 'center' }}
                  suffix="+"
               />
               Compleated <br /> Projects
            </Card>
         </Col>
         <Col xs={24} sm={8}>
            <Card bordered={false} className="card shadow">
               <Statistic
                  title={
                     <div className={s.statistic}>
                        <MdMenuBook className={s.statistic__icon} />
                        Certification
                     </div>
                  }
                  value={8}
                  formatter={formatter}
                  valueStyle={{ color: 'var(--text-color)', textAlign: 'center' }}
                  suffix="+"
               />
               Finished <br /> Courses
            </Card>
         </Col>
      </Row>
   )
}
