import React from 'react';

import { UserList } from '../../components/user-list';
import { View } from 'react-native';

interface IHomeScreenProps {
  users: IUserData[];
  requestUsers: () => void;
  requestUsersNext: () => void;
  selectUser: (userLogin: string) => void;
}

export class HomeScreenComponent extends React.Component<IHomeScreenProps> {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.requestUsers();
    }
  }

  endReachedHandler = () => {
    this.props.requestUsersNext();
  }

  itemSelectHandler = (id) => {
    this.props.selectUser(id);
  }

  render() {
    const { users } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <UserList
          users={users}
          onItemSelect={this.itemSelectHandler}
          onEndReached={this.endReachedHandler}
        />
      </View>
    );
  }
}
