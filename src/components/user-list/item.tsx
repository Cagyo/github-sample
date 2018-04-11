import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { compose, withHandlers } from 'recompose';

// Linking.openURL
import { styles } from './styles';
import { Link } from '../link';

interface IUserItemInnerProps {
  pressHandler: () => void;
}

interface IUserItemProps {
  user: IUserData;
  onPress: (login: string) => void;
}

const enchance = compose<{}, IUserItemProps>(
  withHandlers<IUserItemProps, {}>({
    pressHandler: props => () => props.onPress(props.user.login),
  })
);

const UserItemComponent: React.SFC<IUserItemInnerProps & IUserItemProps> = (props) => {
  const { user, pressHandler } = props;

  return (
    <TouchableOpacity style={styles.item} onPress={pressHandler}>
      <View style={styles.login}>
        <Text>{user.login}</Text>
      </View>
      <Link reference={user.html_url} />
      <View style={styles.avatar}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatarImage} />
      </View>
    </TouchableOpacity>
  );
};

export const UserItem = enchance(UserItemComponent);
