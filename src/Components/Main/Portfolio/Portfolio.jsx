import { Row, Tabs } from 'antd'
import React from 'react'
import aim_trainer from '../../../assets/images/aim_trainer.png'
import blog from '../../../assets/images/blog.jpg'
import board from '../../../assets/images/board.png'
import britlex from '../../../assets/images/britlex.png'
import elements from '../../../assets/images/elements.png'
import memory_game from '../../../assets/images/memory_game.png'
import practice from '../../../assets/images/practice.jpg'
import social_network from '../../../assets/images/social_network.png'
import tic_tac_toe from '../../../assets/images/tic_tac_toe.png'
import todo from '../../../assets/images/todo.png'
import weather from '../../../assets/images/weather.jpg'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import s from './Portfolio.module.css'
import ProjectItem from './ProjectItem'

export default function Portfolio() {
	const projects = [
		{
			key: '1',
			image: todo,
			title: 'Todo list',
			demo: 'https://d1m0n4ik8.github.io/Applications/todo/todo.html',
			github: 'https://github.com/d1m0n4ik8/',
			category: 'web',
			tags: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			key: '2',
			image: tic_tac_toe,
			title: 'Tic tac toe game',
			demo: 'https://d1m0n4ik8.github.io/Applications/tic_tac_toe/tic_tac_toe.html',
			github: 'https://github.com/d1m0n4ik8/tic_tac_toe',
			category: 'app',
			tags: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			key: '3',
			image: board,
			title: 'Board',
			demo: 'https://d1m0n4ik8.github.io/Applications/board/board.html',
			github: 'https://github.com/d1m0n4ik8/board',
			category: 'app',
			tags: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			key: '4',
			image: elements,
			title: '100 elements',
			demo: 'https://d1m0n4ik8.github.io/Applications/100el/elements.html',
			github: 'https://github.com/d1m0n4ik8/100-el',
			category: 'app',
			tags: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			key: '5',
			image: memory_game,
			title: 'Memory game',
			demo: 'https://d1m0n4ik8.github.io/Applications/memory/memory.html',
			github: 'https://github.com/d1m0n4ik8/Memory-game',
			category: 'app',
			tags: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			key: '6',
			image: britlex,
			title: 'britlex',
			demo: 'https://d1m0n4ik8.github.io/britlex/',
			github: 'https://github.com/d1m0n4ik8/britlex',
			category: 'web',
			tags: ['HTML', 'CSS', 'Bootstrap'],
		},
		{
			key: '7',
			image: aim_trainer,
			title: 'Aim trainer',
			demo: 'https://d1m0n4ik8.github.io/aim_game/',
			github: 'https://github.com/d1m0n4ik8/aim_game',
			category: 'app',
			tags: ['HTML', 'CSS', 'JavaScript'],
		},
		{
			key: '8',
			image: social_network,
			title: 'Social network',
			demo: 'https://d1m0n4ik8.github.io/Social-network',
			github: 'https://github.com/d1m0n4ik8/Social-network',
			category: 'app',
			tags: ['React', 'Redux', 'CSS', 'Axios', 'Ant Design'],
		},
		{
			key: '9',
			image: blog,
			title: 'Blog',
			demo: 'https://blog-c5876.web.app/',
			github: 'https://github.com/d1m0n4ik8/blog',
			category: 'app',
			tags: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind'],
		},
		{
			key: '10',
			image: practice,
			title: 'Redux Toolkit practice',
			demo: 'https://redux-toolkit-practice-khaki.vercel.app/',
			github: 'https://github.com/d1m0n4ik8/redux-toolkit-practice',
			category: 'app',
			tags: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind'],
		},
		{
			key: '11',
			image: weather,
			title: 'Weather-forecast',
			demo: 'https://weather-forecast-d1m0n4ik8.vercel.app/',
			github: 'https://github.com/d1m0n4ik8/Weather-forecast',
			category: 'app',
			tags: ['React', 'TypeScript', 'SASS', 'Axios', 'Tailwind', 'Weather API'],
		},
	].reverse()
	const items = [
		{
			key: '1',
			label: <div className={s.tab}>All</div>,
			children: (
				<Row gutter={[20, 20]}>
					{projects.map(project => (
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
						.filter(project => project.category === 'app')
						.map(project => (
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
						.filter(project => project.category === 'web')
						.map(project => (
							<ProjectItem {...project} />
						))}
				</Row>
			),
		},
	]
	return (
		<div className={s.projects} id='portfolio'>
			<SectionHeader title='Portfolio' description='My recent work' />
			<Tabs defaultActiveKey='1' items={items} centered />
		</div>
	)
}
