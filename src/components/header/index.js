import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Row, Col } from 'react-bootstrap';
import MainMenu from './../main-menu/';
import BootstrapContainer from './../bootstrap-container/';

export default class Header extends React.Component {
  render() {
    // these are the times in your menu
    const menuItems = ['Home', 'About', 'Videos', 'Gallery', 'Contact'];

    return (
      <BootstrapContainer className="header-wrapper">
        <Row>
          <Col md={5}>
            <h1>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}>
                ReabowRotors
              </Link>
            </h1>
          </Col>
          <Col md={7} />
        </Row>
      </BootstrapContainer>
    );
  }
}
