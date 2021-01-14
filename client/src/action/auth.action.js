import axios from "../helpers/axios"
import { authConstants, initialDataConstants, SkillsConstants } from "../constants"

export const login = (userData) => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios
            .post("/signin", {
                ...userData
            })
        if (res.status == 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token)
            localStorage.setItem('user',JSON.stringify(user))

            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,user
                }
            })
        }
        else {
            if (res.status == 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error:res.data.error
                    }
                })
            }
        }

    }
}


export const isLoggedIn=()=>{
    return async dispatch=>{
        const token=localStorage.getItem('token')
        if(token)
        {
            const user=JSON.parse(localStorage.getItem('user'))
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,user
                }
            })
        }
        else
        {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error:'Failed to login'
                }
            })
        }
    }
}

export const initialData=()=>{
    return async dispatch=>{
        const res= await axios.get("/skills");
        if(res.status==200)
        {
            dispatch({
                type:SkillsConstants.SKILL_SUCCESS,
                payload:{
                    skills:res.data.skills,
                    tools:res.data.tools,
                }
            })
        }
        else{
            dispatch({
                type:SkillsConstants.SKILL_SUCCESS,
                payload:{
                   error:res.error
                }
            })
        }
            
     
           
       
    }
}


export const sigout=()=>{
    console.log('came to Sigout Function');
    return async dispatch=>{
        dispatch({type:authConstants.LOGOUT_REQUEST})
        // const res=await axios
        //   .post("/signout");
        // //   .then(res => )
        // //   .catch(err => console.error(err));
        // if(res.status==200)
        // {
            localStorage.clear();
            dispatch({
                type:authConstants.LOGOUT_SUCCESS
            })
        // }
        // else
        // {
            // dispatch({
            //     type:authConstants.LOGOUT_FAILURE,
            //     payload:{error:res.data.error}
            // })
        // }
    }
}