import * as types from '../actions/types';

export const initialState = {
  list: [],
  since: 1,
  loading: false,
};

export function followersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REQUEST_USER_FOLLOWERS:
    case types.REQUEST_USER_FOLLOWERS_NEXT:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_USER_FOLLOWERS_FAIL:
    case types.REQUEST_USER_FOLLOWERS_NEXT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case types.REQUEST_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        list: payload,
        since: 2,
        loading: false,
      };
    case types.REQUEST_USER_FOLLOWERS_NEXT_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...payload],
        since: state.since + 1,
        loading: false,
      };
    case types.SELECT_USER:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
}
