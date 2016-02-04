import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo';

import { ADD_CODE, DELETE_CODE, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function code(state, action) {
  switch (action.type) {
    case ADD_CODE:
      return {
        id: action.id,
        text: action.text,
        deleted: false
      };
    case DELETE_CODE:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        deleted: true
      };
    default:
      return state;
  }
}

function codes(state = [], action) {
  switch (action.type) {
    case ADD_CODE:
      return [
        ...state,
        code(undefined, action)
      ];
    case DELETE_CODE:
      return state.map(t =>
        code(t, action)
      );
    default:
      return state;
  }
}

const codeApp = combineReducers({
  visibilityFilter,
  codes: undoable(codes, { filter: distinctState() })
});

export default codeApp;
