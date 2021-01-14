import React from 'react'
import About from '../About'
import Contactus from '../Contactus'
import Footer from '../Footer'
import NavigationBar from '../NavigationBar'
import Projects from '../Projects'
import Skills from '../Skills'
import Tools from '../Tools'

const Home = () => {
  return (
    <div>
      <div id="home" />
      <NavigationBar/>
      <div  id="about" />
      <About/>
      <div id="projects" />
      <Projects/>
      <div id="skills"/>
      <Skills/>
      <div id="tools" />
      <Tools/>
      <div id="contact" />
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default Home
