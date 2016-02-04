import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo';

import { ADD_CODE, DELETE_CODE, DISLIKE_CODE, LIKE_CODE, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
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
        code: action.code,
        name: action.name,
        dislike: 0,
        like: 0,
        deleted: false
      };
    case DELETE_CODE:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        dislike: state.dislike,
        like: state.like,
        deleted: true
      };
    case DISLIKE_CODE:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        dislike: state.dislike + 1,
        like: state.like,
        deleted: false,
      };
    case LIKE_CODE:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        dislike: state.dislike,
        like: state.like + 1,
        deleted: false,
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
    case DISLIKE_CODE:
    case LIKE_CODE:
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
