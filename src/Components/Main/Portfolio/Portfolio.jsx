import { Row, Tabs } from 'antd'
import React from 'react'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import s from './Portfolio.module.css'
import bg1 from '../../../assets/images/my_photo1.jpg'
import ProjectItem from './ProjectItem'

export default function Portfolio() {
   const projects = [
      { key: '1', image: bg1, title: 'Social network', demo: '#home', github: '#home', tag: 'app' },
      { key: '2', image: bg1, title: 'Social network', demo: '#home', github: '#home', tag: 'web' },
      { key: '3', image: bg1, title: 'Social network', demo: '#home', github: '#home', tag: 'web' },
   ]
   const items = [
      {
         key: '1',
         label: <div className={s.tab}>All</div>,
         children: (
            <Row gutter={[20, 20]}>
               {projects.map((project) => (
                  <ProjectItem {...project} />
               ))}
            </Row>
         ),
      },
      {
         key: '2',
         label: <div className={s.tab}>App</div>,
         children: (
            <Row gutter={[20, 20]}>
               {projects
                  .filter((project) => project.tag === 'app')
                  .map((project) => (
                     <ProjectItem {...project} />
                  ))}
            </Row>
         ),
      },
      {
         key: '3',
         label: <div className={s.tab}>Web</div>,
         children: (
            <Row gutter={[20, 20]}>
               {projects
                  .filter((project) => project.tag === 'web')
                  .map((project) => (
                     <ProjectItem {...project} />
                  ))}
            </Row>
         ),
      },
   ]
   return (
      <div className={s.projects} id="portfolio">
         <SectionHeader title="Portfolio" description="My recent work" />
         <Tabs defaultActiveKey="1" items={items} centered />
      </div>
   )
}
