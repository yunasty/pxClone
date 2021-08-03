import * as FollowAPI from "../util/FollowAPI";
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const UPDATE_FOLLOW = 'UPDATE_FOLLOW';



const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

const updateFollow = follow => ({
  type: UPDATE_FOLLOW,
  follow
})

export const getFollowStatus = (userId) => (dispatch) => (
  FollowAPI.getFollowing(userId)
    .then((data) => dispatch(receiveFollow(data)))
)


export const toggleFollow = (following, profileId) => (dispatch) => {
  if (following === true) {
    FollowAPI.deleteFollow(profileId).then((data) =>
      dispatch(receiveFollow(data))
    );
  } else {
    FollowAPI.createFollow(profileId).then((data) =>
      dispatch(receiveFollow(data))
    );
  }
};
