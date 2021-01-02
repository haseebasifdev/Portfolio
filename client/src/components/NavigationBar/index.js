import React, { useState } from 'react'
import { Navbar, Button, Form, FormControl, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import Typical from "react-typical/dist/index"
// import  from 'react-typical'
import "./style.css"
const NavigationBar = () => {
    const [navbar, setnavbar] = useState(false)
    const [navlink, setnavlink] = useState("navlinkwhite")
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
    window.addEventListener('scroll', changeBackgrounf)
    // 

    // 
    return (
        <div>
            <div className="navbarimg">
                <Navbar bg={navbar ? "light" : "transparent"} expand="lg" fixed="top" >
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className={`${navlink} font-weight-bold navlink `} to="/">Home</NavLink>

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
            </div>
        </div>
    )
}

export default NavigationBar
