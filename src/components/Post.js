import React from "react";
import PropTypes from "prop-types";
import {Container, Row, Col, Grid} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// import ProfilePic from "./ProfilePic";

function Post(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="col-2">
            {props.profilePic}
          </Col>
          <Col className="col-10">
            {props.profileName} - {props.description}
          </Col>
        </Row>
        <br></br>
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