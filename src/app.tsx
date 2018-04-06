import React, { Component } from 'react';
import { Platform, UIManager, View, Text } from 'react-native';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';

// import { rootSaga } from './sagas';
// import { configureStore } from './store';

// import { AppWrapper } from './component';

interface IProps {}
interface IState {
  store?: any;
  persistor?: any;
}
console.log('pop')
export class App extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {};
    // this.initialStore();
    if (Platform.OS === 'android') {
      // tslint:disable-next-line
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

  }

  // initialStore = () => {
  //   configureStore().then(({ store, persistor }) => {
  //     store.runSaga(rootSaga);
  //     this.setState({ store, persistor });
  //   });
  // }

  render() {
    // const { store, persistor } = this.state;

    // if (!store) return null;

    return (
      <View><Text>qweeq</Text></View>
      // <Provider store={store}>
      //   <PersistGate
      //     persistor={persistor}
      //   >
      //     <AppWrapper dispath={store.dispatch} />
      //   </PersistGate>
      // </Provider>
    );
  }
}
