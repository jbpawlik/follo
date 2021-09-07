import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2">
        <p>{props.profilePic}</p>
        <p>{props.profileName} - {props.description}</p>
        </div></div>
    </React.Fragment>
  )
};

Post.propTypes = {
  profilePic: PropTypes.object.isRequired,
  profileName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}; 

export default Post; 