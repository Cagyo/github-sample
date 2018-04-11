import { action } from './index';
import {
  REQUEST_USER_FOLLOWERS,
  REQUEST_USER_FOLLOWERS_SUCCESS,
  REQUEST_USER_FOLLOWERS_FAIL,
  REQUEST_USER_FOLLOWERS_NEXT,
  REQUEST_USER_FOLLOWERS_NEXT_SUCCESS,
  REQUEST_USER_FOLLOWERS_NEXT_FAIL,
} from './types';

export const requestUserFollowers = () =>
action(REQUEST_USER_FOLLOWERS);
export const requestUserFollowersSuccess = (payload: IUserData[]) =>
action(REQUEST_USER_FOLLOWERS_SUCCESS, payload);
export const requestUserFollowersFail = (payload?: string) =>
action(REQUEST_USER_FOLLOWERS_FAIL, payload);
export const requestUserFollowersNext = () =>
action(REQUEST_USER_FOLLOWERS_NEXT);
export const requestUserFollowersNextSuccess = (payload: IUserData[]) =>
action(REQUEST_USER_FOLLOWERS_NEXT_SUCCESS, payload);
export const requestUserFollowersNextFail = (payload?: string) =>
action(REQUEST_USER_FOLLOWERS_NEXT_FAIL, payload);