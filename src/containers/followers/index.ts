import { connect } from 'react-redux';

import { FollowersScreenComponent } from './component';
import { connector } from './selectors';
import {
  requestUserFollowers,
  requestUserFollowersNext,
} from './../../actions';

export const FollowersScreen = connect(connector, {
  requestUserFollowers,
  requestUserFollowersNext,
})(FollowersScreenComponent as any);
