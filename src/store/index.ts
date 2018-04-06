/* import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'remote-redux-devtools';

import { rootReducer } from '../reducers/index';
import { configureLogger } from './logger';
import { withReduxDevTools } from './options';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const config = {
  storage: AsyncStorage,
  key: 'primary',
  stateReconciler: autoMergeLevel2,
};

let composeEnhancers = compose;

if (__DEV__) {
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
  const loggerMiddleware = configureLogger();
  middlewares.push(loggerMiddleware);

  if (withReduxDevTools && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
    });
  } else {
    composeEnhancers = composeWithDevTools;
  }
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
 */