import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../action/auth.action'
import loader from "../../pictures/loading3.gif"
import "./style.css"
const Login = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const siginForm = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    dispatch(login(data))

    // console.log(res.data);
  }
  if (auth.authencate) {
    return <Redirect to="/admin" />
  }
  return (
    <div className="mycard d-flex justify-content-center ">
      {
        auth.loading ?
          <div className=" rouded text-center loader">
            <img src={loader}
              className=" loader "
              width="200px" />
          </div> : ""
      }
      <div  className="card p-4 ">
        <h2>Haseeb Asif</h2>
        <form className="commentForm" onSubmit={siginForm}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="text-center">

          <button
            onClick={siginForm}
            type="submit" className="btn btn-outline-dark btn-block ">Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
