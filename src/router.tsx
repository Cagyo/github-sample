import React from 'react';
import { connect } from 'react-redux';

import { onAppInit } from './actions';
import { connector } from './selectors';
import { RouterConfig } from './routes/config';
import { addNavigationHelpers } from 'react-navigation';

export const RouterComponent = ({ dispatch, nav }) => {
  return (
    <RouterConfig
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
    />
  );
};

export const Router = connect(connector, {
  onAppInit,
})(RouterComponent);
