import { Alert } from 'react-native';
import {
  call,
  put,
} from 'redux-saga/effects';

import { perPage } from '../constants';

export function* requestWithPagination(apiMethod, since, successAction, failAction, options = { path: null, get: {} }) {
  try {
    const res = options.path
      ? yield call(apiMethod, options.path, { ...options.get, page: since, per_page: perPage })
      : yield call(apiMethod, { ...options.get, since, per_page: perPage });
    yield put(successAction(res));
  } catch (exc) {
    if (exc.networkError) {
      yield call(Alert.alert, 'No internet connection');
    } else if (exc.message) {
      yield call(Alert.alert, exc.message);
    } else {
      yield call(Alert.alert, 'Unexpected error');
    }

    yield put(failAction(exc));
  }
}
