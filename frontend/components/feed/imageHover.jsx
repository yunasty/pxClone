import React from "react";
import LikeButton from "./likeButton";
import { Link } from "react-router-dom";

// props
// 1. user pertaining to post
// 2. the post id
// 3. the profile image of the user that posted the
//

// to do:
// 1. this component will need access to the post API in order to be able to
// pass the liked image to the backend

const ImageHover = (props) => {
  // const likeImage = postId => {

  // }

  const linkToUser = `users/${props.posterId}/profile`;

  return (
    <div className="image-hover">
      <div className="image-hover-top">{props.post.title}</div>
      <div className="image-hover-bottom">
        <div className="hover-user">
          {/* <img>
            Will store the user image
            for the user that posted the image
            </img> */}
          {/* <Link to={`users/${props.posterId}/profile`}>
            {props.post.username}
          </Link> */}
        </div>
        <div className="hover-interaction">
          {/* <LikeButton liked={} /> */}
        </div>
      </div>
    </div>
  );
};

export default ImageHover;
