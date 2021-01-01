import React, { useState } from 'react'
import { Navbar, Button,Form,FormControl,Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import "./style.css"
const NavigationBar = () => {
    const [navbar, setnavbar] = useState(false)
    const [navlink, setnavlink] = useState("navlinkwhite")
    const changeBackgrounf=()=>{
        if(window.scrollY>=50){
            setnavbar(true)
            setnavlink("navlinkblack")
        }
        else{
            setnavbar(false)
            setnavlink("navlinkwhite")
        }
        // console.log({navbar,navlink});
    }
    window.addEventListener('scroll',changeBackgrounf)
    return (
        <div className="navbarimg">
            <Navbar bg={navbar?"light":"transparent"} expand="lg" fixed="top" >
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className={`${navlink} font-weight-bold navlink`} to="/">Home</NavLink>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default NavigationBar
