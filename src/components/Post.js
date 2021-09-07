import React from "react";
import PropTypes from "prop-types";
import {Container, Row, Col, Grid} from "react-bootstrap";
// import ProfilePic from "./ProfilePic";

function Post(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col lg='2'>
            {props.profilePic}
          </Col>
          <Col lg='10'>
            {props.profileName} - {props.description}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
};

Post.propTypes = {
  profilePic: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}; 

export default Post; 