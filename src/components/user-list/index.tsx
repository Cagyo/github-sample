import React from 'react';
import { FlatList } from 'react-native';
import { compose, withHandlers } from 'recompose';

import { styles } from './styles';
import { requestUsers } from '../../actions';
import { UserItem } from './item';

const enchance = compose(
  withHandlers({
  }),
);

const UserListComponent = (props) => {
  const { users, onEndReached, onItemSelect } = props;
  if (users.length) {
    return (
      <FlatList
        style={styles.mainContainer}
        contentContainerStyle={styles.mainContainerContent}
        data={users}
        renderItem={({ item }) => (
          <UserItem
            user={item}
            onPress={onItemSelect}
          />
        )}
        // onRefresh={requestUsers}
        // refreshing={loading}
        keyExtractor={user => `${user.id}${user.login}`}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    );
  }

  return null;
};

export const UserList = enchance(UserListComponent);
