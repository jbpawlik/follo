import Newsfeed from "./Newsfeed";
import ProfileSidebar from "./ProfileSidebar";
import Header from "./Header"
import '../../src/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Grid} from "react-bootstrap";

// import ProfileSidebar from "./ProfileSidebar";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          <Col className="col-2">
            <ProfileSidebar/>          
          </Col>
          <Col className="col-10">
          <Newsfeed />
          </Col>
        </Row>
        <br></br>
      </Container>
    </React.Fragment>
  );
}

export default App;
