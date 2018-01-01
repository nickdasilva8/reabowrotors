import React from 'react';
import BootstrapContainer from './../components/bootstrap-container';
import { Col } from 'react-bootstrap';

const IndexPage = () => (
  <div>
    <BootstrapContainer className="first-box" backgroundImage={true} id="about">
      <h1>Content? What content? This is the about section!</h1>
      <p>
        As you can see, I don't really have enough information to put on my
        website. So I should spend an hour or two thinking about what kind of
        information I want on my landing page.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </BootstrapContainer>
    <BootstrapContainer className="second-box" id="videos">
      <Col sm={12} md={4}>
        <h1>Videos</h1>
        <p>Something something here are some videos, something something.</p>
        <p>
          See my YouTube channel for more videos.{' '}
          <a href="https://www.youtube.com/c/jaredreabow">Click here</a>
        </p>
      </Col>
      <Col sm={12} md={4}>
        <h2>Drone chases car</h2>
        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/EBTg6qX1WMk?rel=0&amp;showinfo=0"
          frameborder="0"
          gesture="media"
          allow="encrypted-media"
          allowfullscreen
        />
      </Col>
      <Col sm={12} md={4}>
        <h2>A glorious sunset</h2>
        <iframe
          width="auto"
          height="auto"
          src="https://www.youtube.com/embed/skw1ERNbkls?rel=0&amp;showinfo=0"
          frameborder="0"
          gesture="media"
          allow="encrypted-media"
          allowfullscreen
        />
      </Col>
    </BootstrapContainer>
  </div>
);

export default IndexPage;
