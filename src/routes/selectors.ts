import { createStructuredSelector } from 'reselect';
import {
  getSelectedUserLogin,
} from '../selectors/raw-selectors';

export const connector = createStructuredSelector({
  selectedUserLogin: getSelectedUserLogin,
});
