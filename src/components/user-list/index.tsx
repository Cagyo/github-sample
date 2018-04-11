import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';
import { UserItem } from './item';

interface IUserListProps {
  users: IUserData[];
  loading: boolean;
  touchable?: boolean;
  onEndReached: () => void;
  onItemSelect: (userLogin: string) => void;
  onRefresh: () => void;
}

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
      />
    );
  }

  return null;
};

// export const UserList = enchance(UserListComponent);
