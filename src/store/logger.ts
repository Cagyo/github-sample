import { createLogger } from 'redux-logger';
import R from 'ramda';
import { lockUnlockActions, navigateActions } from './options';

const getActionType = (action) => {
  const type = action.type;
  const activity = R.path(['meta', 'activity'], action);
  const path = R.path(['meta', 'path'], action);
  const mediaType =
    R.path(['payload', 'mediaType'], action)
    || R.path(['meta', 'mediaType'], action);
  const title =
    R.path(['payload', 'title'], action)
    || R.path(['meta', 'title'], action);
  const displayType = [type, activity, path, mediaType, title]
    .filter(item => item)
    .join(' | ');

  return {
    ...action,
    type: displayType,
  };
};

export const configureLogger = () => createLogger({
  collapsed: true,
  actionTransformer: getActionType,
  logger: console,
  // stateTransformer: immutableToJS,
  colors: {
    title: ({ type }) => {
      if (type.includes('SUCCESS')) return 'green';
      if (type.includes('FAIL')) return 'red';
      if (type.includes('REQUEST')) return 'blue';

      return undefined;
    },
  },
  predicate: (_getState, { type }) => {
    let isVisible = type !== 'COLLECT_ACTIONS';

    if (!lockUnlockActions && isVisible) {
      isVisible =  type !== 'LOCK_APP' && type !== 'UNLOCK_APP';
    }

    if (!navigateActions && isVisible) {
      isVisible =  type !== 'Navigation/NAVIGATE'
        && type !== 'NAVIGATE_WITH_UNLOCK'
        && type !== 'Navigation/BACK'
        && type !== 'Navigation/SET_PARAMS'
        && type !== 'NAVIGATE_BACK_WITH_UNLOCK';
    }

    return isVisible;
  }
});
