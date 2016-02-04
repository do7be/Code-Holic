export const ADD_CODE = 'ADD_CODE';
export const DELETE_CODE = 'DELETE_CODE';
export const DISLIKE_CODE = 'DISLIKE_CODE';
export const LIKE_CODE = 'LIKE_CODE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DELETED: 'SHOW_DELETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

let nextCodeId = 0;

export function addCode(data) {
  return {
    id: nextCodeId++,
    type: ADD_CODE,
    code: data.code,
    name: data.name
  };
};

export function deleteCode(id) {
  return { type: DELETE_CODE, id };
};

export function dislikeCode(id) {
  return { type: DISLIKE_CODE, id };
};

export function likeCode(id) {
  return { type: LIKE_CODE, id };
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
};
