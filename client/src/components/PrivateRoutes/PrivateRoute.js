import React from 'react'
import { Redirect, Route } from "react-router-dom";

// const PrivateRoute=({component:Component,rest})=>{
//     return <Route {...rest} component={(props)=>{
//         const token=window.localStorage.getItem('token')
//         if(token)
//         {
//             return <Component {...props}/>
//         }
//         else
//         {
//             return <Redirect to={`/signin`} />
//         }
//     }} />
// }




class PrivateRoute extends Route {
    render() {
        if (localStorage.getItem("token")) {
            return <Route {...this.props} />
        } else {
            return <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: this.props.location }
                }}
            />
        }
    }
}
export default PrivateRoute