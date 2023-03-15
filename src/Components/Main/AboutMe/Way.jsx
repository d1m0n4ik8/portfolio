import { Steps, Tabs } from 'antd'
import s from './AboutMe.module.css'
import { SectionHeader } from '../../UIcomponents/SectionHeader'
import { GoMortarBoard } from 'react-icons/go'
import { FaBriefcase } from 'react-icons/fa'
import { TimeLine } from './TimeLine'
import { StarOutlined } from '@ant-design/icons'
const Way = () => {
   const items = [
      {
         key: '1',
         label: (
            <div className={s.tab}>
               Experience <FaBriefcase className={s.tab__icon} />
            </div>
         ),
         children: <TimeLine />,
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
               className={s.steps}
               initial={1}
               items={[
                  {
                     title: <div className={s.stepItem}>Bachelor, September 2022 — Present</div>,
                     description: (
                        <div className={s.stepItem}>
                           National university of life and environmental sciences of Ukraine, Kyiv
                        </div>
                     ),
                     status: 'wait',
                     icon: <StarOutlined style={{ color: 'var(--text-color)', fontSize: 25 }} />,
                  },
                  {
                     title: <div className={s.stepItem}>Junior specialist, September 2018 — June 2022</div>,
                     description: (
                        <div className={s.stepItem}>
                           Rivne professional college of national university of life and environmental sciences of
                           Ukraine, Rivne
                        </div>
                     ),
                     status: 'finish',
                  },
               ]}
            />
         ),
      },
   ]

   return (
      <section>
         <SectionHeader title="Qualification" description=" My journey" />
         <Tabs defaultActiveKey="1" items={items} centered />
      </section>
   )
}
export default Way
