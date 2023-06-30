import { Col, Row, Space } from 'antd'
import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import Sertificats from './Certificats/Certificats'
import s from './Skills.module.css'
const FrontendSkills = ['HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Ant Design']
const AdditionalSkills = ['Redux', 'Redux Toolkit', 'RESTful APIs', 'Figma', 'MongoDB', 'SQL']

export default function Skills() {
	return (
		<div className={s.skills} id='skills'>
			<SectionHeader title='Skills' description='My technical level' />
			<Row gutter={[16, 16]} justify='space-between'>
				<Col xs={24} sm={24} md={11} className={s.card}>
					<div className={s.card__info}>
						<Row gutter={[0, 16]}>
							<Col span={24} className={s.card__header}>
								Frontend
							</Col>
							{FrontendSkills.map(skill => (
								<Col span={12} className={s.card__col}>
									<Space>
										<BsFillPatchCheckFill />
										{skill}
									</Space>
								</Col>
							))}
						</Row>
					</div>
				</Col>
				<Col xs={24} sm={24} md={11} className={s.card}>
					<div className={s.card__info}>
						<Row gutter={[0, 16]} justify='space-between'>
							<Col span={24} className={s.card__header}>
								Additional
							</Col>
							{AdditionalSkills.map(skill => (
								<Col span={12} className={s.card__col}>
									<Space>
										<BsFillPatchCheckFill />
										{skill}
									</Space>
								</Col>
							))}
						</Row>
					</div>
				</Col>
			</Row>
			<Sertificats />
		</div>
	)
}
