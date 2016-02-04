import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { addCode, deleteCode, dislikeCode, likeCode, setVisibilityFilter, VisibilityFilters } from '../actions';
import AddCode from '../components/AddCode';
import CodeList from '../components/CodeList';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { dispatch, visibleCodes, visibilityFilter } = this.props;
    return (
      <div className="wrapper">
        <h1>Code Holic</h1>
        <AddCode
          onAddSubmit={data => dispatch(addCode(data))} />
        <CodeList
          codes={visibleCodes}
          onCodeClick={id => dispatch(deleteCode(id))}
          onClickMinus={id => dispatch(dislikeCode(id))}
          onClickPlus={id => dispatch(likeCode(id))} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}
          onUndo={() => dispatch(ActionCreators.undo())}
          onRedo={() => dispatch(ActionCreators.redo())}
          undoDisabled={this.props.undoDisabled}
          redoDisabled={this.props.redoDisabled} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visibleCodes: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    dislike: PropTypes.number.isRequired,
    like: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_GOOD',
    'SHOW_BAD'
  ]).isRequired,
  undoDisabled: PropTypes.bool.isRequired,
  redoDisabled: PropTypes.bool.isRequired
}

function selectCodes(codes, filter) {
  switch (filter) {
    default:
    case VisibilityFilters.SHOW_ALL:
      return codes;
    case VisibilityFilters.SHOW_GOOD:
      return codes.filter(code => code.like >= code.dislike);
    case VisibilityFilters.SHOW_BAD:
      return codes.filter(code => code.like < code.dislike);
  }
}

function select(state) {
  return {
    undoDisabled: state.codes.past.length === 0,
    redoDisabled: state.codes.future.length === 0,
    visibleCodes: selectCodes(state.codes.present, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(App);
