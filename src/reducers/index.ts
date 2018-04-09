import { appReducer } from './app';
import { navReducer } from './nav';

export const rootReducer = {
  application: appReducer,
  nav: navReducer,
};
