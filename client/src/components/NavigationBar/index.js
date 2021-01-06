import React, { useState } from 'react'
import { Navbar, Button, Form, FormControl, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import Typical from "react-typical/dist/index"
// import  from 'react-typical'
import { Link } from 'react-scroll'
import "./style.css"
const NavigationBar = () => {
    const [navbar, setnavbar] = useState(false)
    const [navlink, setnavlink] = useState("navlinkwhite")
    const [scrollbtn, setscrollbtn] = useState("invisible")
    const changeBackgrounf = () => {
        if (window.scrollY >= 50) {
            setnavbar(true)
            setnavlink("navlinkblack")
        }
        else {
            setnavbar(false)
            setnavlink("navlinkwhite")
        }
        // console.log({navbar,navlink});
    }
    const scroolbtn = () => {
        if (window.scrollY >= 400) {
            setscrollbtn("visible")
        }
        else {
            setscrollbtn("invisible")
        }
        // console.log({navbar,navlink});
    }
    window.addEventListener('scroll', changeBackgrounf)
    window.addEventListener('scroll', scroolbtn)

    // 
    // 
    return (
        <div>
            <div className="navbarimg" id="home">
                <Navbar bg={navbar ? "light" : "transparent"} expand="lg" fixed="top" >
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto justify-content-end">

                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="about" spy={true} smooth={true}>About</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="tools" spy={true} smooth={true}>Tools</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="contact" spy={true} smooth={true}>Contact me</Link></li>
                            {/* <NavLink className={`${navlink} font-weight-bold navlink `} to="/">Home</NavLink> */}

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container-fluid name-div">

                    <div className="name text-white">
                        <h1 style={{ "font-weight": "700" }}>Haseeb<br /> Asif</h1>
                        <br />
                    </div>
                    <h4 className="animate container" dataText="Computer_Scientist">
                        Computer Scientists
                        </h4>
                </div>
                <div className="scroll">
                    <Link to="home" spy={true} smooth={true}>
                        <button className={`btn btn-outline-dark mybtn ${scrollbtn}`}>
                            <i class="material-icons">arrow_drop_up</i>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default NavigationBar
