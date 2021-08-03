import {
  RECEIVE_USER,
  RECEIVE_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
} from "../actions/userActions";

import { RECEIVE_POSTS } from "../actions/postActions";

const defaultState = {
  users: {},
  followedUsers: []
};

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState[action.payload.user.id] = action.payload.user;
      return newState;
    // this case will be called when the posts for a user's feed are retrieved
    // and with them the ids of the users that are being followed by the 
    // current user
    case RECEIVE_POSTS:
      return {
        users: {
          ...state.users
        },
        followedUsers: action.payload.followedUsers
      }
    // this case will called when a userProfile is grabbed or when the follow
    // status of a user changes
    case UPDATE_USER:

    case FOLLOW_USER:

    default:
      return state;
  }
};

export default usersReducer;
