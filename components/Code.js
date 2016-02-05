import React, { Component, PropTypes } from 'react'

export default class Code extends Component {
  render() {
    return (
      <li className="code-preview">
        <pre className="code-area">
          <code className="code">
            {this.props.code}
          </code>
        </pre>
        <div>
          <button className="btn" onClick={this.props.onClickPlus}>+</button>
          <button className="btn" onClick={this.props.onClickMinus}>-</button>
          <div className="user-name">
            <span>
              by {this.props.name}
            </span>
          </div>
        </div>
        <span>↑{this.props.like}</span>
        ：
        <span>↓{this.props.dislike}</span>
      </li>
    );
  }
};

Code.propTypes = {
  onClick: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired,
  dislike: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
};
