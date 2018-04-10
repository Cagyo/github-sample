import { connect } from 'react-redux';

import { FollowersScreenComponent } from './component';
import { connector } from './selectors';
import {
  requestUserFollowers,
  requestUserFollowersNext,
  selectUser,
} from './../../actions';

export const FollowersScreen = connect(connector, {
  requestUserFollowers,
  requestUserFollowersNext,
  selectUser,
})(FollowersScreenComponent);
