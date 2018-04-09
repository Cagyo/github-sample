// import * as React from 'react';
import { StackNavigator } from 'react-navigation';

import {
  HomeScreen,
} from '../containers';

export const RouterConfig = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
});
