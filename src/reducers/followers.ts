import { perPage } from './../constants/common';
import * as types from '../actions/types';

export const initialState = {
  list: [],
  since: 1,
};

export function followersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REQUEST_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        list: payload,
        since: 2,
      };
    case types.REQUEST_USER_FOLLOWERS_NEXT_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...payload],
        since: state.since + 1,
      };
    default:
      return state;
  }
}
