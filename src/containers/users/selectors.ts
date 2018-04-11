import { createStructuredSelector } from 'reselect';

import {
  getUsers,
  getUsersLoading,
} from '../../selectors/raw-selectors';

export const connector = createStructuredSelector({
  users: getUsers,
  loading: getUsersLoading,
});
