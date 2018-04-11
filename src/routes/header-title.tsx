import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { withState, compose } from 'recompose';

import { connector } from './selectors';
import { styles } from './styles';

interface IHeaderTitleOuterProps {
  type: string;
  selectedUserLogin: string;
}

interface IHeaderTitleInnerProps {
  title: string;
}

const HeaderTitleEnhancer = compose<IHeaderTitleInnerProps, IHeaderTitleOuterProps>(
  withState('title', 'updateTitle', (props: IHeaderTitleOuterProps) => {
    switch (props.type) {
      case 'user':
        return `${props.selectedUserLogin} followers`;
      default:
        return '';
    }
  }),
);

const HeaderTitleComponent = ({ title }) => (
  <Text style={styles.header}>{title}</Text>
);

export const HeaderTitle = connect(connector)(HeaderTitleEnhancer(HeaderTitleComponent));
