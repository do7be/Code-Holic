import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }

    return (
      <a href="#" onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  renderFilters() {
    return (
      <p>
        Filter:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_GOOD', 'Good')}
        {', '}
        {this.renderFilter('SHOW_BAD', 'Bad')}
        .
      </p>
    )
  }

  renderUndo() {
    return (
      <p>
        <button onClick={this.props.onUndo} disabled={this.props.undoDisabled}>Undo</button>
        <button onClick={this.props.onRedo} disabled={this.props.redoDisabled}>Redo</button>
      </p>
    )
  }

  render() {
    return (
      <div>
        {this.renderFilters()}
        {this.renderUndo()}
      </div>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  undoDisabled: PropTypes.bool.isRequired,
  redoDisabled: PropTypes.bool.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_GOOD',
    'SHOW_BAD'
  ]).isRequired
}
