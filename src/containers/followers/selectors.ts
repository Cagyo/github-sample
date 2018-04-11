import { createStructuredSelector } from 'reselect';

import {
  getFollowers,
  getFollowersLoading,
} from '../../selectors/raw-selectors';

export const connector = createStructuredSelector({
  followers: getFollowers,
  loading: getFollowersLoading,
});
