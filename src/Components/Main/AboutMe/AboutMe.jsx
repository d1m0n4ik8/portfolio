import { Col, Row } from 'antd'
import React from 'react'
import { HiOutlineDownload } from 'react-icons/hi'
import resume from '../../../assets/Svyryd_Dmytro_Frontend_developer_Resume.pdf'
import myPhoto from '../../../assets/images/my_photo2.jpg'
import MyButton from '../../UIcomponents/MyButton/MyButton'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import s from './AboutMe.module.css'
import Info from './Info'
import Way from './Way'

export default function AboutMe() {
	return (
		<div className={s.aboutMe} id='about'>
			<SectionHeader title='About me' description='My introduction' />
			<Row gutter={[10, 20]}>
				<Col xs={24} sm={24} md={10} style={{ textAlign: 'center' }}>
					<img className={s.photo} src={myPhoto} alt='My_photo' />
				</Col>
				<Col xs={24} sm={24} md={14}>
					<Info />
					<div className={s.description}>
						Throughout my academic journey and self-learning, I have actively engaged in various projects and
						coursework that have allowed me to gain hands-on experience in web development.
					</div>
					<div className={s.description}>
						I am constantly exploring new technologies and trends in the industry, keeping myself updated with the
						latest advancements. I'm a quick learner and able to quickly adapt to new projects and technologies.
					</div>
					<div>
						<a href={resume} download='Svyryd_Dmytro_Frontend_developer_Resume.pdf'>
							<MyButton transparentbutton='true'>
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
