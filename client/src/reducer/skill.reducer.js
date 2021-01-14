import { SkillsConstants } from "../constants";

const initialState={
    skills:[],
    loading:false,
    error:{}
}

export default (state = initialState, action)=> {
  switch (action.type) {
    case SkillsConstants.SKILL_REQUEST:
      return {
        ...state,
        loading:true
        
      };
    case SkillsConstants.SKILL_SUCCESS:
      return {
        ...state,
        loading:false,
        skills:action.payload.skills    
      };
    case SkillsConstants.SKILL_FAILURE:
      return {
        ...state,
        loading:false,
        skills:action.payload.error    
      };
     
    default:
      return state;
  }
}