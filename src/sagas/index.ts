import { all, call } from 'redux-saga/effects';
import R from 'ramda';

import * as usersWatchers from './users';

const callWatchers = R.compose(R.map(call), R.values);

export function* rootSaga() {
  yield all([
    ...callWatchers(usersWatchers),
  ]);
}
