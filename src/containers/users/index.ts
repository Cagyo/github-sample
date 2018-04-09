import { connect } from 'react-redux';

import { HomeScreenComponent } from './component';
import { connector } from './selectors';
import { requestUsers } from './../../actions';

export const HomeScreen = connect(connector, {
  requestUsers
})(HomeScreenComponent);
