import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { compose, withHandlers } from 'recompose';

// Linking.openURL
import { styles } from './styles';

const enchance = compose(
  withHandlers({
    onPress: props => () => props.onPress(props.user.login),
  })
);

const UserItemComponent = (props) => {
  const { user, onPress } = props;

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.login}>
        <Text>{user.login}</Text>
      </View>
      <View style={styles.link}>
        <Text>profile link</Text>
      </View>
      <View style={styles.avatar}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatarImage} />
      </View>
    </TouchableOpacity>
  );
};

export const UserItem = enchance(UserItemComponent);
