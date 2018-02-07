import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import BootstrapContainer from './../components/bootstrap-container';
import MainMenu from './../components/main-menu/';

export default class IndexPage extends React.Component {
  render() {
    // builds all the items inside the <li>'s of menu
    // doesn't handle 'active' tab yet.

    const menuItems = ['Home', 'About', 'Videos', 'Gallery', 'Contact'];

    return (
      <div>
        <BootstrapContainer
          className="first-box"
          backgroundImage={true}
          id="about">
          <h1>Content? What content? This is the about section!</h1>
          <Row>
            <Col sm={12} md={2}>
              <MainMenu menuItems={menuItems} />
            </Col>
            <Col sm={12} md={10}>
              <div>
                <span>row one</span>
              </div>
              <div>
                <span>row two</span>
              </div>
              <div>
                <span>row three</span>
              </div>
            </Col>
          </Row>
        </BootstrapContainer>
      </div>
    );
  }
}
