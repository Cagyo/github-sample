import * as types from '../actions/types';

export const initialState = {
  users: [],
};

export function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REQUEST_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
      };
    case types.REQUEST_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: payload,
      };
    case types.SELECT_USER:
      return {
        ...state,
        selectedUserId: payload,
      };
    default:
      return state;
  }
}
