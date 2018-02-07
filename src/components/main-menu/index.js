import React from 'react';
import PropTypes from 'prop-types';

export default class MainMenu extends React.Component {
  render() {
    // builds all the items inside the <li>'s of menu
    // doesn't handle 'active' tab yet.
    const menu = this.props.menuItems.map((menuItem, index) => {
      return (
        <li key={index} role="presentation">
          {menuItem === 'Home' ? (
            <a id={`${menuItem.toLowerCase()}-menu-item`} href={'/'}>
              {menuItem}
              <div
                style={{
                  backgroundImage: `url(./static/${menuItem.toLowerCase()}-background.jpg)`,
                  height: '50px;'
                }}
              />
            </a>
          ) : (
            <a
              id={`${menuItem.toLowerCase()}-menu-item`}
              href={`#${menuItem.toLowerCase()}`}>
              {menuItem}
              <div />
            </a>
          )}
        </li>
      );
    });

    return (
      <div className="main-menu-wrapper">
        <ul className="nav nav-pills nav-stacked">{menu}</ul>
      </div>
    );
  }
}
