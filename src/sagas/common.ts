import { Alert } from 'react-native';
import {
  call,
  put,
} from 'redux-saga/effects';

import { perPage } from '../constants';

export function* requestWithPagination(apiMethod, since, successAction, failAction, options = {}) {
  try {
    const res = yield call(apiMethod, { ...options, since, 'per-page': perPage });
    yield put(successAction(res));
  } catch (exc) {
    yield call(Alert.alert, 'Error');
    yield put(failAction(exc));
  }
}
