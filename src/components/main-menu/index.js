import React from 'react';
import PropTypes from 'prop-types';

export default class MainMenu extends React.Component {
  render() {
    // builds all the items inside the <li>'s of menu
    // doesn't handle 'active' tab yet
    const menu = this.props.menuItems.map((menuItem, index) => {
      return (
        <li key={index} role="presentation">
          {menuItem === 'Home' ? (
            <a href={'/'}>{menuItem}</a>
          ) : (
            <a href={`#${menuItem.toLowerCase()}`}>{menuItem}</a>
          )}
        </li>
      );
    });

    return (
      <div className="main-menu-wrapper">
        <ul className="nav nav-pills">{menu}</ul>
      </div>
    );
  }
}
