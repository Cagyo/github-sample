import React from 'react';
import { connect } from 'react-redux';

import { onAppInit } from './actions';
import { connector } from './selectors';
import { RouterConfig } from './routes/config';
import { addNavigationHelpers } from 'react-navigation';

interface IRouterProps {
  dispatch: any;
  nav: any;
}

export const RouterComponent: React.SFC<IRouterProps> = ({ dispatch, nav }) => {
  return (
    <RouterConfig
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
    />
  );
};

export const Router: any = connect(connector, {
  onAppInit,
})(RouterComponent as any);
