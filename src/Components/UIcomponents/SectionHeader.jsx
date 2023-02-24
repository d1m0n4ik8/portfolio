import React from 'react'

export const SectionHeader = ({ title, description }) => {
   return (
      <div className="section">
         <div className="section__title">{title}</div>
         <div className="section__description">{description}</div>
      </div>
   )
}
