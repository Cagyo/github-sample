import R from 'ramda';

export const getNavigator = R.path(['nav']);

export const getSelectedUserId = R.path(['users', 'selectedUserId']);
export const getUsers = R.path(['users', 'users']);
