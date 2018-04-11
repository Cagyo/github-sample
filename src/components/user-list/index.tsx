import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';
import { UserItem } from './item';

export const UserList: React.SFC<IUserListProps> = (props) => {
  const {
    users,
    loading,
    touchable,
    onEndReached,
    onItemSelect,
    onRefresh,
  } = props;

  if (users.length) {
    return (
      <FlatList
        style={styles.mainContainer}
        contentContainerStyle={styles.mainContainerContent}
        data={users}
        renderItem={({ item }) => (
          <UserItem
            user={item}
            touchable={touchable}
            onPress={onItemSelect}
          />
        )}
        onRefresh={onRefresh}
        refreshing={loading}
        keyExtractor={user => `${user.id}${user.login}`}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        initialNumToRender={20}
        windowSize={4}
      />
    );
  }

  return null;
};
