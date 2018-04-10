import { perPage } from './../constants/common';
import { takeLatest, call, select, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { REQUEST_USERS, REQUEST_USER_FOLLOWERS, REQUEST_USERS_NEXT, REQUEST_USER_FOLLOWERS_NEXT } from './../actions/types';
import {
  getSelectedUserId, getUsersSince,
} from '../selectors/raw-selectors';
import {
  requestUsersSuccess,
  requestUsersFail,
  requestUsersNextSuccess,
  requestUsersNextFail,
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

function* onRequestUserFollowers({ payload }: any) {
  try {
    const userId = yield select(getSelectedUserId);
    const res = yield call(getUserFollowers, userId);

    yield put(requestUsersSuccess(res));
  } catch (exc) {
    yield put(requestUsersFail());
    Alert.alert('Error');
  }
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
