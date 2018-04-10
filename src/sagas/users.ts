import { perPage } from './../constants/common';
import { takeLatest, call, select, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import {
  REQUEST_USERS,
  REQUEST_USER_FOLLOWERS,
  REQUEST_USERS_NEXT,
  REQUEST_USER_FOLLOWERS_NEXT,
  SELECT_USER,
} from './../actions/types';
import {
  getSelectedUserId, getUsersSince, getFollowersSince,
} from '../selectors/raw-selectors';
import {
  requestUsersSuccess,
  requestUsersFail,
  requestUsersNextSuccess,
  requestUsersNextFail,
  requestUserFollowersSuccess,
  requestUserFollowersFail,
  requestUserFollowersNextSuccess,
  requestUserFollowersNextFail,
} from '../actions';
import {
  getUsers,
  getUserFollowers,
} from '../api/users';
import { requestWithPagination } from './common';

function* onRequestUsers({ type }: any) {
  if (type === REQUEST_USERS) {
    yield call(requestWithPagination, getUsers, 0, requestUsersSuccess, requestUsersFail);
  } else {
    const usersSince = yield select(getUsersSince);

    yield call(requestWithPagination, getUsers, usersSince + perPage, requestUsersNextSuccess, requestUsersNextFail);
  }
}

function* onRequestUserFollowers({ type }: any) {
  const userId = yield select(getSelectedUserId);

  if (type === REQUEST_USER_FOLLOWERS) {
    yield call(
      requestWithPagination,
      getUserFollowers,
      1,
      requestUserFollowersSuccess,
      requestUserFollowersFail,
      { path: userId, get: {} },
    );
  } else {
    const followersSince = yield select(getFollowersSince);

    yield call(
      requestWithPagination,
      getUserFollowers,
      followersSince,
      requestUserFollowersNextSuccess,
      requestUserFollowersNextFail,
      { path: userId, get: {} }
    );
  }
}

function* onSelectUser() {
  yield put(NavigationActions.navigate({ routeName: 'Followers' }));
}

export function* watchRequestUsers() {
  yield takeLatest(REQUEST_USERS, onRequestUsers);
}

export function* watchRequestUsersNext() {
  yield takeLatest(REQUEST_USERS_NEXT, onRequestUsers);
}

export function* watchRequestUserFollowers() {
  yield takeLatest(REQUEST_USER_FOLLOWERS, onRequestUserFollowers);
}

export function* watchRequestUserFollowersNext() {
  yield takeLatest(REQUEST_USER_FOLLOWERS_NEXT, onRequestUserFollowers);
}

export function* watchSelectUser() {
  yield takeLatest(SELECT_USER, onSelectUser);
}
