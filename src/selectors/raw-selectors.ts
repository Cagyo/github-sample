import R from 'ramda';

export const getNavigator = R.path(['nav']);

export const getActiveCourseTitle = R.path(['course', 'metadata', 'name']);
