import { createSelector, createStructuredSelector } from 'reselect';
import {
  getNavigator,
} from './raw-selectors';

export const nav = createSelector(
  getNavigator,
  navigator => navigator,
);

export const connector = createStructuredSelector({
  nav,
});
