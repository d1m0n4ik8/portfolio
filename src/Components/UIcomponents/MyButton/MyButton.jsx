import React from 'react'
import s from './MyButton.module.css'

export default function MyButton(props) {
   return (
      <div>
         <button {...props} className={s.button}>
            <span className={props.transparentbutton ? `${s.transparent}` : ''}>{props.children}</span>
         </button>
      </div>
   )
}
