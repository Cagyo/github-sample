import { action } from './index';
import {
  REQUEST_USERS,
  REQUEST_USERS_FAIL,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_NEXT,
  REQUEST_USERS_NEXT_SUCCESS,
  REQUEST_USERS_NEXT_FAIL,
  SELECT_USER,
} from './types';

export const requestUsers = () =>
  action(REQUEST_USERS);
export const requestUsersSuccess = (payload: IUserData[]) =>
  action(REQUEST_USERS_SUCCESS, payload);
export const requestUsersFail = (payload?: string) =>
  action(REQUEST_USERS_FAIL, payload);
export const requestUsersNext = () =>
  action(REQUEST_USERS_NEXT);
export const requestUsersNextSuccess = (payload: IUserData[]) =>
  action(REQUEST_USERS_NEXT_SUCCESS, payload);
export const requestUsersNextFail = (payload?: string) =>
  action(REQUEST_USERS_NEXT_FAIL, payload);

export const selectUser = (payload: string) => action(SELECT_USER, payload);
