import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Intro from './Intro/Intro'
import Portfolio from './Portfolio/Portfolio'
import Skills from './Skills/Skills'
import Contacts from './Contacts/Contacts'

export default function Main() {
   return (
      <main className="container">
         <Intro />
         <AboutMe />
         <Skills />
         <Portfolio />
         <Contacts />
      </main>
   )
}
