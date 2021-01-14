import React, { useEffect, useState } from 'react'
import { Navbar, Form, FormControl, Nav } from "react-bootstrap"
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import ReactRotatingText from 'react-rotating-text';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
import "./style.css"
const NavigationBar = () => {
    const auth = useSelector(state => state.auth.authencate)
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
    }
    const scroolbtn = () => {
        if (window.scrollY >= 400) {
            setscrollbtn("visible")
        }
        else {
            setscrollbtn("invisible")
        }
    }
    window.addEventListener('scroll', changeBackgrounf)
    window.addEventListener('scroll', scroolbtn)
    return (
        <div>
            <div className="navbarimg" id="home">
                <Navbar bg={navbar ? "light" : "transparent"} expand="lg" fixed="top" className="py-3">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">

                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="home" spy={true} smooth={true}>Home</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="about" spy={true} smooth={true}>About</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="tools" spy={true} smooth={true}>Tools</Link></li>
                            <li className={`${navlink} font-weight-bold navlink mx-2`}>
                                <Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                            {
                                auth ?
                                    <li>
                                        <NavLink className={`${navlink} font-weight-bold navlink mx-2`} to="/admin/skills" >Admin</NavLink></li> : ""
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container-fluid name-div">

                    <div className="name text-white">
                        <h1 style={{ "font-weight": "700" }}>Haseeb<br />Asif</h1>

                        <br />
                    </div>
                    <div className="typeWritertext">
                        <span>
                            <ReactRotatingText className="title" items={['Computer Scientist ', 'Full-Stack Developer    ', 'Coder  ', "BUG SQUASHER  "]} />
                            <br />
                            <br />
                            <a href="https://github.com/haseebasifdev" target="_blank" role="button" className="btn btn-dark">Resume</a>
                        </span>
                    </div>
                </div>
                <div className={`scroll ${scrollbtn} bg-dark linktop `}>
                    <Link to="home" className={``} spy={true} smooth={true}>
                        <FaAngleDoubleUp className="text-white" size={25} />
                    </Link>
                </div>
                <div className={`gotoprofile`}>
                    <Link to="about" className={`btn btn-outline-dark btn-sm border`} spy={true} smooth={true}>
                        <FaAngleDoubleDown className="text-white" size={15} />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default NavigationBar
