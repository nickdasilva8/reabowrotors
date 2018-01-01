import React from 'react';

export default class BootstrapContainer extends React.Component {
  render() {
    console.log('props: ', this.props);
    const template = this.props.backgroundImage ? (
      <div
        id={this.props.id && this.props.id}
        className={`content-wrapper ${this.props.className}`}>
        <div className="overlay">
          <div className="container all">{this.props.children}</div>
        </div>
      </div>
    ) : (
      <div
        id={this.props.id && this.props.id}
        className={`content-wrapper ${this.props.className}`}>
        <div className="container all">{this.props.children}</div>
      </div>
    );
    return template;
  }
}
