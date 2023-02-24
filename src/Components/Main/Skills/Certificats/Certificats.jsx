import { Carousel, Image } from 'antd'
import React from 'react'
import s from './Certificats.module.css'
import html from '../../../../assets/certificats/html.jpg'
import js_started from '../../../../assets/certificats/js_started.jpg'
import js_advanced from '../../../../assets/certificats/js_advanced.jpg'
import renome from '../../../../assets/certificats/renome.jpg'
import duolingo from '../../../../assets/certificats/duolingo.jpg'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { SectionHeader } from '../../../UIcomponents/SectionHeader'

export default function Sertificats() {
   const items = [
      { key: '1', src: renome, alt: 'Renome' },
      { key: '2', src: html, alt: 'HTML && CSS' },
      { key: '3', src: js_started, alt: 'JS started' },
      { key: '4', src: js_advanced, alt: 'JS advanced' },
      { key: '5', src: duolingo, alt: 'Duolingo' },
   ]

   return (
      <div className={s.certificats}>
         <SectionHeader title="Certificats" description="My certificats" />
         <Carousel autoplay arrows prevArrow={<BsFillArrowLeftCircleFill />} nextArrow={<BsFillArrowRightCircleFill />}>
            {items.map((item) => (
               <div className={s.item} key={item.key}>
                  <Image {...item} className={s.image} height="100%" />
               </div>
            ))}
         </Carousel>
      </div>
   )
}
