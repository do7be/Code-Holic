import React, { Component, PropTypes } from 'react'

export default class Code extends Component {
  render() {
    return (
      <li className="code-preview"
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.deleted ? 'line-through' : 'none',
          cursor: this.props.deleted ? 'default' : 'pointer'
        }}>
        <pre className="code-area">
          <code className="code">
            {this.props.code}
          </code>
        </pre>
        <p className="user-name">
          by {this.props.name}
        </p>
      </li>
    );
  }
};

Code.propTypes = {
  onClick: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired
};
