export const ADD_CODE = 'ADD_CODE';
export const DELETE_CODE = 'DELETE_CODE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DELETED: 'SHOW_DELETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

let nextCodeId = 0;

export function addCode(text) {
  return {
    id: nextCodeId++,
    type: ADD_CODE,
    text
  };
};

export function deleteCode(id) {
  return { type: DELETE_CODE, id };
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
};
