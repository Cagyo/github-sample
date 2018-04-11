import R from 'ramda';

export const getNavigator = R.path(['nav']);

export const getSelectedUserLogin = R.path(['users', 'selectedUserLogin']);
export const getUsers = R.path(['users', 'users']);
export const getUsersSince = R.path(['users', 'since']);
export const getUsersLoading = R.path(['users', 'loading']);

export const getFollowers = R.path(['followers', 'list']);
export const getFollowersSince = R.path(['followers', 'since']);
export const getFollowersLoading = R.path(['followers', 'loading']);
