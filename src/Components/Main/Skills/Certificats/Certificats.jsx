import { Carousel, Image } from 'antd'
import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import cybersecurity from '../../../../assets/certificats/cybersecurity.png'
import diya from '../../../../assets/certificats/diya.png'
import html from '../../../../assets/certificats/html.jpg'
import it_essentials from '../../../../assets/certificats/it_essentials.png'
import js_advanced from '../../../../assets/certificats/js_advanced.jpg'
import js_started from '../../../../assets/certificats/js_started.jpg'
import renome from '../../../../assets/certificats/renome.jpg'
import { SectionHeader } from '../../../UIcomponents/SectionHeader'
import s from './Certificats.module.css'

const LeftArrow = ({ arrowClassName, currentSlide, slideCount, ...restArrowProps }) => {
	return <BsFillArrowLeftCircleFill className={arrowClassName} {...restArrowProps} />
}
const RightArrow = ({ arrowClassName, currentSlide, slideCount, ...restArrowProps }) => {
	return <BsFillArrowRightCircleFill className={arrowClassName} {...restArrowProps} />
}

export default function Sertificats() {
	const items = [
		{ key: '1', src: renome, alt: 'Renome' },
		{ key: '2', src: js_advanced, alt: 'JS advanced' },
		{ key: '3', src: html, alt: 'HTML && CSS' },
		{ key: '4', src: js_started, alt: 'JS started' },
		{ key: '5', src: diya, alt: 'Diya' },
		{ key: '6', src: cybersecurity, alt: 'Cybersecurity' },
		{ key: '7', src: it_essentials, alt: 'It essentials' },
	]

	return (
		<div className={s.certificats}>
			<SectionHeader title='Certificats' description='My certificats' />
			<Carousel autoplay arrows prevArrow={<LeftArrow />} nextArrow={<RightArrow />}>
				{items.map(item => (
					<div className={s.item} key={item.key}>
						<Image {...item} className={s.image} height='100%' />
					</div>
				))}
			</Carousel>
		</div>
	)
}
