import React, { Suspense, lazy } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Loadable from 'react-loadable';
import NavigationBar from '../NavigationBar'
const About = Loadable(
  {
    loader: () => import(/* webpackChunkName: "About"*/"../About"),
    loading: "loading..."
  })
const Contactus = Loadable(
  {
    loader: () => import(/* webpackChunkName: "Contact"*/"../Contactus"),
    loading: "loading..."
  })
const Footer = Loadable(
  {
    loader: () => import(/* webpackChunkName: "Footer"*/"../Footer"),
    loading: "loading..."
  })
const Projects = Loadable(
  {
    loader: () => import(/* webpackChunkName: "Projects"*/"../Projects"),
    loading: "loading..."
  })
const Skills = Loadable(
  {
    loader: () => import(/* webpackChunkName: "Skills"*/"../Skills"),
    loading: "loading..."
  })
const Tools = Loadable(
  {
    loader: () => import(/* webpackChunkName: "Tools"*/"../Tools"),
    loading: "loading..."
  })
const Home = () => {
  return (
    <>
      <div id="home" />
      <NavigationBar />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div id="about" />
      <About />
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div id="projects" />
      <Projects />
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div id="skills" />
      <Skills />
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div id="tools" />
      <Tools />
      {/* </Suspense> */}
      <div id="contact" />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Contactus />
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Footer />
      {/* </Suspense> */}
    </>
  )
}

export default Home
