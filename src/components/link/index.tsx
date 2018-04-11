import React from 'react';
import {
  View,
  Text,
  Linking,
} from 'react-native';
import { compose, withHandlers } from 'recompose';

import { styles } from './styles';

const enchance = compose<ILinkInnerProps, ILinkOuterProps>(
  withHandlers<ILinkOuterProps, {}>({
    pressHandler: props => () => Linking.openURL(props.reference),
  }),
);

const LinkComponent: React.SFC<ILinkInnerProps & ILinkOuterProps> = ({ pressHandler }) => (
  <View style={styles.link}>
    <Text
      style={styles.text}
      onPress={pressHandler}
    >
      profile link
    </Text>
  </View>
);

export const Link = enchance(LinkComponent);
