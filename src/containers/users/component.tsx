import React from 'react';
import { View } from 'react-native';

import { UserList } from '../../components/user-list';
import { styles } from './styles';

export class HomeScreenComponent extends React.Component<IHomeScreenProps> {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.requestUsers();
    }
  }

  endReachedHandler = () => {
    this.props.requestUsersNext();
  }

  itemSelectHandler = (userLogin: string) => {
    this.props.selectUser(userLogin);
  }

  refreshHandler = () => {
    this.props.requestUsers();
  }

  render() {
    const { users, loading } = this.props;

    return (
      <View style={styles.wrapper}>
        <UserList
          users={users}
          loading={loading}
          onItemSelect={this.itemSelectHandler}
          onEndReached={this.endReachedHandler}
          onRefresh={this.refreshHandler}
        />
      </View>
    );
  }
}
