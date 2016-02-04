import React, { Component, PropTypes } from 'react'

export default class Code extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.deleted ? 'line-through' : 'none',
          cursor: this.props.deleted ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    )
  }
}

Code.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired
}
