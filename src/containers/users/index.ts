import { connect } from 'react-redux';

import { HomeScreenComponent } from './component';
import { connector } from './selectors';
import { requestUsers, requestUsersNext, selectUser } from './../../actions';

export const HomeScreen = connect(connector, {
  requestUsers,
  requestUsersNext,
  selectUser,
})(HomeScreenComponent as any);
