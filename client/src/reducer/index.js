import {combineReducers} from "redux"
import auth from "./auth.reducer"
import skills from "./skill.reducer"
import projects from "./project.reducer"


const rootReducer=combineReducers({
    skills,
    auth,
    projects
})

export default rootReducer