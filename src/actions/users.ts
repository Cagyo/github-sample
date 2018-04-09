import { action } from './index';
import {
  REQUEST_USERS,
  REQUEST_USERS_FAIL,
  REQUEST_USERS_SUCCESS,
  REQUEST_USER_FOLLOWERS,
  REQUEST_USER_FOLLOWERS_SUCCESS,
  REQUEST_USER_FOLLOWERS_FAIL,
} from './types';

export const requestUsers = () => action(REQUEST_USERS);
export const requestUsersSuccess = payload => action(REQUEST_USERS_SUCCESS, payload);
export const requestUsersFail = (payload?: string) => action(REQUEST_USERS_FAIL, payload);

export const requestUserFollowers = (payload: string) => action(REQUEST_USER_FOLLOWERS, payload);
export const requestUserFollowersSuccess = payload => action(REQUEST_USER_FOLLOWERS_SUCCESS, payload);
export const requestUserFollowersFail = (payload?: string) => action(REQUEST_USER_FOLLOWERS_FAIL, payload);
