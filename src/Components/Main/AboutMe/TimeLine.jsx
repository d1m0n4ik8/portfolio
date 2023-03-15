import { Timeline } from 'antd'
import React from 'react'
import s from './AboutMe.module.css'
const { Item } = Timeline

export const TimeLine = () => {
   return (
      <Timeline mode="right" className={s.timeLine}>
         <Item className={s.timelineItem} label="November 2022 — Present">
            Study React and Redux, Youtube
         </Item>
         <Item className={s.timelineItem} label="April 2022 — Present">
            Study English, Duolingo
         </Item>
         <Item className={s.timelineItem} label="August 2022 — August 2022">
            Course JavaScript Advanced, ITVDN
         </Item>
         <Item className={s.timelineItem} label="July 2022 — August 2022">
            Course HTML & CSS Essential, ITVDN, ITVDN
         </Item>
         <Item className={s.timelineItem} label="May, 2022 — July, 2022">
            Passing practice at Administrative services center, Klevan
         </Item>
         <Item className={s.timelineItem} label="April 2022 — May 2022">
            Course JavaScript Starter, ITVDN
         </Item>
         <Item className={s.timelineItem} label="December, 2021 — June, 2022">
            Internship at RenomeSmart
         </Item>
         <Item className={s.timelineItem} label="October 2021 — November 2021">
            IT Essential, Cisco Academy
         </Item>
      </Timeline>
   )
}
