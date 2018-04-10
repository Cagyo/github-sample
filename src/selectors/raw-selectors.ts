import R from 'ramda';

export const getNavigator = R.path(['nav']);

export const getSelectedUserId = R.path(['users', 'selectedUserLogin']);
export const getUsers = R.path(['users', 'users']);
export const getUsersSince = R.path(['users', 'since']);

export const getFollowers = R.path(['followers', 'list']);
export const getFollowersSince = R.path(['followers', 'since']);
