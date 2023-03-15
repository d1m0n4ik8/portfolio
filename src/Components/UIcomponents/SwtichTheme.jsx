import React, { useState } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import useTheme from '../../common/Hooks/useTheme'

export default function SwitchTheme() {
   const { theme, setTheme } = useTheme()
   const [cheaked, setCheaked] = useState(theme === 'dark')
   const toggleTheme = () => {
      cheaked ? setTheme('ligth') : setTheme('dark')
      setCheaked(!cheaked)
   }
   return (
      <>
         {cheaked ? (
            <BsSunFill onClick={toggleTheme} color="var(--text-color)" fontSize={20} />
         ) : (
            <BsMoonStarsFill onClick={toggleTheme} color="var(--text-color)" fontSize={20} />
         )}
      </>
   )
}
