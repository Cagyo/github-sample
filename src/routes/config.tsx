import * as React from 'react';
import { StackNavigator } from 'react-navigation';

import {
  HomeScreen,
  FollowersScreen,
} from '../containers';
import { HeaderTitle } from './header-title';

export const RouterConfig = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Users',
    },
  },
  Followers: {
    screen: FollowersScreen,
    navigationOptions: {
      headerTitle: <HeaderTitle type='user' />,
    },
  },
});
