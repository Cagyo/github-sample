import React from 'react';
import { FlatList } from 'react-native';
// import { compose, withHandlers } from 'recompose';

import { styles } from './styles';
import { UserItem } from './item';

interface IUserListProps {
  users: IUserData[];
  loading: boolean;
  onEndReached: () => void;
  onItemSelect: (userLogin: string) => void;
  onRefresh: () => void;
}

// const enchance = compose(
//   withHandlers({
//   }),
// );

export const UserList: React.SFC<IUserListProps> = (props) => {
  const {
    users,
    loading,
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
