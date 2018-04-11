import React from 'react';
import { View } from 'react-native';
import { noop } from 'redux-saga/utils';

import { UserList } from '../../components/user-list';
import { styles } from './styles';

export class FollowersScreenComponent extends React.Component<IFollowersScreenProps> {
  componentDidMount() {
    const { followers, requestUserFollowers } = this.props;

    if (!followers.length) requestUserFollowers();
  }

  endReachedHandler = () => {
    this.props.requestUserFollowersNext();
  }

  refreshHandler = () => {
    this.props.requestUserFollowers();
  }

  render() {
    const { followers, loading } = this.props;

    return (
      <View style={styles.wrapper}>
        <UserList
          users={followers}
          loading={loading}
          onEndReached={this.endReachedHandler}
          onItemSelect={noop}
          onRefresh={this.refreshHandler}
        />
      </View>
    );
  }
}
