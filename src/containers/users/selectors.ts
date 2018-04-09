import { createStructuredSelector } from 'reselect';

import {
  getUsers,
} from '../../selectors/raw-selectors';

export const connector = createStructuredSelector({
  users: getUsers,
});
