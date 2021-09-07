import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.fragment>
      {props.profilePic}
      {props.profileName}
      {props.description}
    </React.fragment>
  )
}

Post.propTypes {
  profilePic: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}; 

export default Post; 