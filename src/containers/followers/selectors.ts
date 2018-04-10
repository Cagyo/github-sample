import { createStructuredSelector } from 'reselect';

import {
  getFollowers,
} from '../../selectors/raw-selectors';

export const connector = createStructuredSelector({
  followers: getFollowers,
});
