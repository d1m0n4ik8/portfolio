import { Anchor, Drawer, Space } from 'antd'
import SwitchTheme from '../UIcomponents/SwtichTheme'
import { BsHouseFill, BsFillPersonFill, BsBriefcaseFill } from 'react-icons/bs'
import { RiContactsBook2Fill, RiCodeSSlashFill } from 'react-icons/ri'
import { TiThMenuOutline } from 'react-icons/ti'
import React, { useState } from 'react'

const HeaderMenu = () => {
   const items = [
      {
         key: 'home',
         href: '#home',
         title: (
            <Space className="menu__item">
               <BsHouseFill />
               Home
            </Space>
         ),
      },
      {
         key: 'about',
         href: '#about',
         title: (
            <Space className="menu__item">
               <BsFillPersonFill />
               About
            </Space>
         ),
      },
      {
         key: 'skills',
         href: '#skills',
         title: (
            <Space className="menu__item">
               <RiCodeSSlashFill />
               Skills
            </Space>
         ),
      },
      {
         key: 'portfolio',
         href: '#portfolio',
         title: (
            <Space className="menu__item">
               <BsBriefcaseFill />
               Portfolio
            </Space>
         ),
      },
      {
         key: 'contacts',
         href: '#contacts',
         title: (
            <Space className="menu__item">
               <RiContactsBook2Fill />
               Contacts
            </Space>
         ),
      },
   ]
   const [open, setOpen] = useState(false)
   const showDrawer = () => {
      setOpen(true)
   }
   const onClose = () => {
      setOpen(false)
   }
   return (
      <>
         <Anchor affix={false} className="menu" items={items} />
         <Drawer
            className="menu__drawer"
            title={
               <Anchor
                  onClick={onClose}
                  affix={false}
                  items={[
                     {
                        key: 'Dima Svyryd',
                        href: '#home',
                        title: <div className="header__logo">Dima Svyryd</div>,
                     },
                  ]}
               />
            }
            placement="left"
            onClose={onClose}
            open={open}>
            <Anchor affix={false} items={items} onClick={onClose} />
         </Drawer>
         <div className="header__buttons">
            <div className="switch">
               <SwitchTheme />
            </div>
            <div className="menu__button">
               <TiThMenuOutline onClick={showDrawer} />
            </div>
         </div>
      </>
   )
}
export default HeaderMenu
