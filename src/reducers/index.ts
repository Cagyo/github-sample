import { appReducer } from './app';
import { navReducer } from './nav';
import { usersReducer } from './users';
import { followersReducer } from './followers';

export const rootReducer = {
  application: appReducer,
  nav: navReducer,
  users: usersReducer,
  followers: followersReducer,
};
