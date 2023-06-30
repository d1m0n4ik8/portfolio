import { Card, Col, Image, Row, Tag } from 'antd'
import React from 'react'
import MyButton from '../../UIcomponents/MyButton/MyButton'
import s from './Portfolio.module.css'

const ProjectItem = props => {
	return (
		<Col xs={24} sm={12} md={8}>
			<Card bordered={false} className={s.card + ' shadow'}>
				<Image className={s.card__image} src={props.image} alt='project' />
				<div className={s.card__title}>{props.title}</div>
				<div className={s.tag}>
					{props.tags.map(tag => (
						<Tag color='#af40ff'>{tag}</Tag>
					))}
				</div>
				<Row gutter={[16, 16]}>
					<Col span={12}>
						<a href={props.github} target='_blank' rel='noreferrer'>
							<MyButton transparentbutton='true' style={{ width: '100%', fontSize: 16 }}>
								Github
							</MyButton>
						</a>
					</Col>
					<Col span={12}>
						<a href={props.demo} target='_blank' rel='noreferrer'>
							<MyButton style={{ width: '100%', fontSize: 16 }}>Live Demo</MyButton>
						</a>
					</Col>
				</Row>
			</Card>
		</Col>
	)
}
export default ProjectItem
