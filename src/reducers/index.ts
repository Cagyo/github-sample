import { appReducer } from './app';
import { navReducer } from './nav';
import { usersReducer } from './users';

export const rootReducer = {
  application: appReducer,
  nav: navReducer,
  users: usersReducer,
};
