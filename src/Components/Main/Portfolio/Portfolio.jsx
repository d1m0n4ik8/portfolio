import { Row, Tabs } from 'antd'
import React from 'react'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import s from './Portfolio.module.css'
import social_network from '../../../assets/images/social_network.png'
import aim_trainer from '../../../assets/images/aim_trainer.png'
import britlex from '../../../assets/images/britlex.png'
import memory_game from '../../../assets/images/memory_game.png'
import elements from '../../../assets/images/elements.png'
import board from '../../../assets/images/board.png'
import tic_tac_toe from '../../../assets/images/tic_tac_toe.png'
import todo from '../../../assets/images/todo.png'
import ProjectItem from './ProjectItem'

export default function Portfolio() {
   const projects = [
      {
         key: '1',
         image: social_network,
         title: 'Social network',
         demo: 'https://d1m0n4ik8.github.io/Social-network',
         github: 'https://github.com/d1m0n4ik8/Social-network',
         tag: 'app',
      },
      {
         key: '2',
         image: aim_trainer,
         title: 'Aim trainer',
         demo: 'https://d1m0n4ik8.github.io/aim_game/',
         github: 'https://github.com/d1m0n4ik8/aim_game',
         tag: 'app',
      },
      {
         key: '3',
         image: britlex,
         title: 'britlex',
         demo: 'https://d1m0n4ik8.github.io/britlex/',
         github: 'https://github.com/d1m0n4ik8/britlex',
         tag: 'web',
      },
      {
         key: '4',
         image: memory_game,
         title: 'Memory game',
         demo: 'https://d1m0n4ik8.github.io/Applications/memory/memory.html',
         github: 'https://github.com/d1m0n4ik8/Memory-game',
         tag: 'app',
      },
      {
         key: '5',
         image: elements,
         title: '100 elements',
         demo: 'https://d1m0n4ik8.github.io/Applications/100el/elements.html',
         github: 'https://github.com/d1m0n4ik8/100-el',
         tag: 'app',
      },
      {
         key: '6',
         image: board,
         title: 'Board',
         demo: 'https://d1m0n4ik8.github.io/Applications/board/board.html',
         github: 'https://github.com/d1m0n4ik8/board',
         tag: 'app',
      },
      {
         key: '7',
         image: tic_tac_toe,
         title: 'Tic tac toe game',
         demo: 'https://d1m0n4ik8.github.io/Applications/tic_tac_toe/tic_tac_toe.html',
         github: 'https://github.com/d1m0n4ik8/tic_tac_toe',
         tag: 'app',
      },
      {
         key: '8',
         image: todo,
         title: 'Todo list',
         demo: 'https://d1m0n4ik8.github.io/Applications/todo/todo.html',
         github: 'https://github.com/d1m0n4ik8/',
         tag: 'web',
      },
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
