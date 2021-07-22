import React from "react";
import FollowButtonContainer from "./followButtonContainer";
import ProfileLocation from "./profile_location";

const ProfileInfo = ({renderFollow, userName, city, country, description}) => {
  const followButton =
    renderFollow === true ? (<FollowButtonContainer />) : (null) 

  return (
    <div className="profile-info">
      <span id="profile-username">{userName}</span>
      <ProfileLocation city={city} country={country} />
      {followButton}
      <span id="profile-description">{description}</span>
    </div>
  );
};

export default ProfileInfo;