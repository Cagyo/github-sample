import { perPage } from './../constants/common';
import * as types from '../actions/types';

export const initialState = {
  users: [],
  since: 0,
  selectedUserLogin: null,
};

export function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REQUEST_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        since: perPage,
      };
    case types.REQUEST_USERS_NEXT_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...payload],
        since: state.since + perPage,
      };
    case types.SELECT_USER:
      return {
        ...state,
        selectedUserLogin: payload,
      };
    default:
      return state;
  }
}
