import React from 'react';
import BootstrapContainer from './../components/bootstrap-container';
import { Col, Row } from 'react-bootstrap';

const IndexPage = () => (
  <div>
    <BootstrapContainer className="first-box" backgroundImage={true} id="about">
      <h1>About ReabowRotors</h1>

      <p>
        Currently <strong>ReabowRotors</strong> is being developed. Should you
        wish to contact me during this period, you can do so with the following
        details:
      </p>
      <ul>
        <li>
          <strong>Email Address: </strong>jared_reabow@outlook.com
        </li>
        <li>
          <strong>Telephone Number:</strong> 07929596513
        </li>
      </ul>
    </BootstrapContainer>
    <BootstrapContainer
      className="second-box"
      backgroundImage={false}
      id="videos">
      <Row>
        <Col md={12}>
          <h1>Videos</h1>
          <p>
            See my YouTube channel for more videos.{' '}
            <a href="https://www.youtube.com/c/jaredreabow">Click here</a>
          </p>
        </Col>
      </Row>
      <Row style={{ paddingTop: '40px' }}>
        <Col xs={12} sm={6} md={4}>
          <h2>
            Welcome to{' '}
            <strong style={{ fontStyle: 'italics' }}>ReabowRotors</strong>
          </h2>
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/iyryA9kXeBA?rel=0&amp;showinfo=0"
            frameBorder="0"
            allowFullScreen
            style={{ maxWidth: '100%' }}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h2>Westage construction project</h2>
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/KigtkFDwk3g?rel=0&amp;showinfo=0&amp;start=125"
            frameBorder="0"
            allowFullScreen
            style={{ maxWidth: '100%' }}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <h2>A glorious Oxfordshire sunset</h2>
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/skw1ERNbkls?rel=0&amp;showinfo=0&amp;start=15"
            frameBorder="0"
            allowFullScreen
            style={{ maxWidth: '100%' }}
          />
        </Col>
      </Row>
    </BootstrapContainer>
  </div>
);

export default IndexPage;
