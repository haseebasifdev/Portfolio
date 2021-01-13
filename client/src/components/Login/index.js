import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../actions/auth.acton'
import loader from "../../pictures/loading3.gif"
const Login = () => {
  const auth=useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const siginForm=(e)=>{
    e.preventDefault();
    const data={
      email,
      password
    }
    dispatch(login(data))

    // console.log(res.data);
  }
  if (auth.authencate) {
    return <Redirect to="/" />
  }
  return (
    <div className="mycard">
      {
        auth.loading?
      <div className=" rouded text-center loader">
        <img src={loader}
        className=" loader "
        width="200px"/>
      </div>:""
      }
       <div className="card auth-card input-field">
         <h2>Instagram</h2>
         <form  className="commentForm" onSubmit={siginForm}>

         <input
         placeholder="Email"
         type="email"
         value={email}
         onChange={(e)=>setemail(e.target.value)}
         />
         <input
         placeholder="Password"
         type="password"
         value={password}
         onChange={(e)=>setpassword(e.target.value)}
         />
         <button className="btn blue waves-effect waves-light"
         onClick={siginForm}
         type="submit"
         >
           Login
         </button>
           </form>
         <h6>
         No Account yet? 
         
             <Link to="/signin"> Login</Link>
         </h6>
      </div>
    </div>
  )
}

export default Login
