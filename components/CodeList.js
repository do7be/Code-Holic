import React, { Component, PropTypes } from 'react'
import Code from './Code'

export default class CodeList extends Component {
  render() {
    return (
      <section className="code-list">
        <h2>Code List</h2>
        <ul>
          {this.props.codes.map(code =>
            <Code {...code}
                  key={code.id}
                  onClick={() => this.props.onCodeClick(code.id)}
                  onClickMinus={() => this.props.onClickMinus(code.id)}
                  onClickPlus={() => this.props.onClickPlus(code.id)} />
          )}
        </ul>
      </section>
    )
  }
}

CodeList.propTypes = {
  onCodeClick: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired,
  onClickPlus: PropTypes.func.isRequired,
  codes: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    dislike: PropTypes.number.isRequired,
    like: PropTypes.number.isRequired,
  }).isRequired).isRequired
}
