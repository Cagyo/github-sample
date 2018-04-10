import { action } from './index';
import {
  REQUEST_USERS,
  REQUEST_USERS_FAIL,
  REQUEST_USERS_SUCCESS,
  REQUEST_USER_FOLLOWERS,
  REQUEST_USER_FOLLOWERS_SUCCESS,
  REQUEST_USER_FOLLOWERS_FAIL,
  REQUEST_USER_FOLLOWERS_NEXT,
  REQUEST_USERS_NEXT,
  REQUEST_USERS_NEXT_SUCCESS,
  REQUEST_USERS_NEXT_FAIL,
  REQUEST_USER_FOLLOWERS_NEXT_SUCCESS,
  REQUEST_USER_FOLLOWERS_NEXT_FAIL,
  SELECT_USER,
} from './types';

export const requestUsers = () => action(REQUEST_USERS);
export const requestUsersSuccess = payload => action(REQUEST_USERS_SUCCESS, payload);
export const requestUsersFail = (payload?: string) => action(REQUEST_USERS_FAIL, payload);
export const requestUsersNext = () => action(REQUEST_USERS_NEXT);
export const requestUsersNextSuccess = payload => action(REQUEST_USERS_NEXT_SUCCESS, payload);
export const requestUsersNextFail = (payload?: string) => action(REQUEST_USERS_NEXT_FAIL, payload);

export const requestUserFollowers = (payload: string) => action(REQUEST_USER_FOLLOWERS, payload);
export const requestUserFollowersSuccess = payload => action(REQUEST_USER_FOLLOWERS_SUCCESS, payload);
export const requestUserFollowersFail = (payload?: string) => action(REQUEST_USER_FOLLOWERS_FAIL, payload);
export const requestUserFollowersNext = (payload: string) => action(REQUEST_USER_FOLLOWERS_NEXT, payload);
export const requestUserFollowersNextSuccess = payload => action(REQUEST_USER_FOLLOWERS_NEXT_SUCCESS, payload);
export const requestUserFollowersNextFail = (payload?: string) => action(REQUEST_USER_FOLLOWERS_NEXT_FAIL, payload);

export const selectUser = (payload: string) => action(SELECT_USER, payload);
