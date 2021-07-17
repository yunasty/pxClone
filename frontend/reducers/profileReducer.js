import { RECEIVE_PROFILE, RESET_PROFILE } from '../actions/profileActions';

const profileReducer = (state = {}, action) => {
  console.log("profileReducer", action.profile)
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PROFILE:
      return action.profile;
    case RESET_PROFILE:
      return {}
    default:
      return state;
  }
}

export default profileReducer;