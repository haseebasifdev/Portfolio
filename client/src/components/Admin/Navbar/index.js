import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { sigout } from "../../../action/auth.action"
import "./style.css"
const AdminNavbar = (props) => {

    const dispatch = useDispatch()
    const Logout = () => {
        dispatch(sigout())
    }
    const auth = useSelector(state => state.auth)
    if (!auth.authencate) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/" className="navbar-brand" >Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/admin/skills">Skills <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/projects" className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item logout">
                            <button onClick={() => Logout()} className="nav-link btn btn-danger ">Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
            {
                props.children
            }
        </div>
    )
}

export default AdminNavbar
