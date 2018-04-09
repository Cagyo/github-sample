import { takeLatest, call, select, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { REQUEST_USERS, REQUEST_USER_FOLLOWERS } from './../actions/types';
import {
  getSelectedUserId,
} from '../selectors/raw-selectors';
import {
  requestUsersSuccess,
  requestUsersFail,
} from '../actions';
import {
  getUsers,
  getUserFollowers,
} from '../api/users';

function* onRequestUsers({ payload }: any) {
  try {
    const res = yield call(getUsers);

    yield put(requestUsersSuccess(res));
  } catch (exc) {
    yield put(requestUsersFail());
    Alert.alert('Error');
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

export function* watchRequestUserFollowers() {
  yield takeLatest(REQUEST_USER_FOLLOWERS, onRequestUserFollowers);
}
