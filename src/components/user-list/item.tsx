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

interface IUserItemOuterProps {
  user: IUserData;
  touchable?: boolean;
  onPress: (login: string) => void;
}

const enchance = compose<IUserItemInnerProps, IUserItemOuterProps>(
  withHandlers<IUserItemOuterProps, {}>({
    pressHandler: props => () => props.onPress(props.user.login),
  })
);

const UserItemComponent: React.SFC<IUserItemInnerProps & IUserItemOuterProps> = (props) => {
  const { user, pressHandler, touchable } = props;
  const Component = touchable ? TouchableOpacity : View;

  return (
    <Component style={styles.item} onPress={pressHandler}>
      <View style={styles.textWrapper}>
        <View style={styles.login}>
          <Text style={styles.loginText}>{user.login}</Text>
        </View>
        <Link reference={user.html_url} />
      </View>
      <View style={styles.avatar}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatarImage} />
      </View>
    </Component>
  );
};

export const UserItem = enchance(UserItemComponent);
