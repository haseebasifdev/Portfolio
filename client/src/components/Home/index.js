import React, { Suspense, lazy } from 'react'
import NavigationBar from '../NavigationBar'
const About = lazy(() => import("../About"))
const Contactus = lazy(() => import("../Contactus"))
const Footer = lazy(() => import("../Footer"))
const Projects = lazy(() => import("../Projects"))
const Skills = lazy(() => import("../Skills"))
const Tools = lazy(() => import("../Tools"))
const Home = () => {
  return (
    <>
      <div id="home" />
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <div id="about" />
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="projects" />
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="skills" />
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="tools" />
        <Tools />
      </Suspense>
      <div id="contact" />
      <Suspense fallback={<div>Loading...</div>}>
        <Contactus />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  )
}

export default Home
