import { NavigationActions } from 'react-navigation';

import { RouterConfig } from '../routes/config';

const initialState = RouterConfig.router.getStateForAction(NavigationActions.navigate({ routeName: 'Home' }));

export const navReducer = (state = initialState, action) =>
RouterConfig.router.getStateForAction(action, state);
