import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'remote-redux-devtools';

import { rootReducer } from '../reducers/index';
import { configureLogger } from './logger';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const config = {
  storage: AsyncStorage,
  key: 'primary',
  stateReconciler: autoMergeLevel2,
};

const composeEnhancers = __DEV__ ? composeWithDevTools : compose;

if (__DEV__) {
  const loggerMiddleware = configureLogger();

  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
  middlewares.push(loggerMiddleware);
}

export const store = createStore(
  persistCombineReducers(
    config,
    { ...rootReducer }),
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
);

// tslint:disable-next-line
store['runSaga'] = sagaMiddleware.run;

export async function configureStore() {
  // AsyncStorage.clear();

  return new Promise((resolve) => {
    const persistor = persistStore(store);

    resolve({ store, persistor });
  });
}
