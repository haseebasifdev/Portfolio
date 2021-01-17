import { ProjectConstants } from "../constants";

const initialState={
    projects:[],
    loading:false,
    error:{}
}

export default (state = initialState, action)=> {
  switch (action.type) {
    case ProjectConstants.PROJECT_REQUEST:
      return {
        ...state,
        loading:true
        
      };
    case ProjectConstants.PROJECT_SUCCESS:
      return {
        ...state,
        loading:false,
        projects:action.payload.projects,
      };
    case ProjectConstants.PROJECT_FAILURE:
      return {
        ...state,
        loading:false,
        skills:action.payload.error
      };
     
    default:
      return state;
  }
}