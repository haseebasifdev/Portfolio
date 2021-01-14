import {combineReducers} from "redux"
import authReducer from "./auth.reducer"
import skills from "./skill.reducer"


const rootReducer=combineReducers({
    skills,
    auth:authReducer
})

export default rootReducer