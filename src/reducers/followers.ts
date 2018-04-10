import { perPage } from './../constants/common';
import * as types from '../actions/types';

export const initialState = {
  followers: [],
  since: 0,
};

export function followersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REQUEST_USER_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: payload,
        since: perPage,
      };
    case types.REQUEST_USER_FOLLOWERS_NEXT_SUCCESS:
      return {
        ...state,
        followers: [...state.followers, ...payload],
        since: state.since + perPage,
      };
    default:
      return state;
  }
}
