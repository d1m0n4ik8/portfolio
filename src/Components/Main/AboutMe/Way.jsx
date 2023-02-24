import { Steps, Tabs, Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import s from './AboutMe.module.css'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import { GoMortarBoard } from 'react-icons/go'
import { FaBriefcase } from 'react-icons/fa'
const { Item } = Timeline

const Way = () => {
   const items = [
      {
         key: '1',
         label: (
            <div className={s.tab}>
               Experience <FaBriefcase className={s.tab__icon} />
            </div>
         ),
         children: (
            <Timeline mode="alternate" className={s.timeLine}>
               <Item>Create a services site 2015-09-01</Item>
               <Item color="green">Solve initial network problems 2015-09-01</Item>
               <Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
               </Item>
               <Item color="red">Network problems being solved 2015-09-01</Item>
               <Item>Create a services site 2015-09-01</Item>
               <Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Item>
            </Timeline>
         ),
      },
      {
         key: '2',
         label: (
            <div className={s.tab}>
               Education
               <GoMortarBoard className={s.tab__icon} style={{ fontSize: 28 }} />
            </div>
         ),
         children: (
            <Steps
               direction="vertical"
               className="steps"
               current={1}
               items={[
                  {
                     title: 'Finished',
                     description: '123',
                  },
                  {
                     title: 'In Progress',
                     description: '123',
                  },
                  {
                     title: 'Waiting',
                     description: '123',
                  },
               ]}
            />
         ),
      },
   ]

   return (
      <section>
         <SectionHeader title="Qualification" description=" My journey" />
         <Tabs defaultActiveKey="1" items={items} centered tabBarStyle={{ color: '#000' }} />
      </section>
   )
}
export default Way
