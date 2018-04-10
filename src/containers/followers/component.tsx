import React from 'react';

import { UserList } from '../../components/user-list';
import { View } from 'react-native';
import { noop } from 'redux-saga/utils';

interface IHomeScreenProps {
  followers: IUserData[];
  requestUserFollowers: () => void;
  requestUserFollowersNext: () => void;
}

export class FollowersScreenComponent extends React.Component<IHomeScreenProps> {
  componentDidMount() {
    if (!this.props.followers.length) {
      this.props.requestUserFollowers();
    }
  }

  endReachedHandler = () => {
    this.props.requestUserFollowersNext();
  }

  render() {
    const { followers } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <UserList
          users={followers}
          onEndReached={this.endReachedHandler}
          onItemSelect={noop}
        />
      </View>
    );
  }
}
