import React, { Component } from 'react';
import { Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { rootSaga } from './sagas';
import { configureStore } from './store';
import { Router } from './router';

export class App extends Component<IAppProps, IAppState> {
  state = {
    store: null,
    persistor: null,
  };

  constructor(props) {
    super(props);
    this.initializeStore();

    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

  }

  initializeStore = () => {
    configureStore().then(({ store, persistor }) => {
      store.runSaga(rootSaga);

      this.setState({ store, persistor });
    });
  }

  render() {
    const { store, persistor } = this.state;

    if (!store) return null;

    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
          <Router
            dispatch={store.dispatch}
          />
        </PersistGate>
      </Provider>
    );
  }
}
