import React from 'react';
import { View } from 'react-native';

interface IHomeScreenProps {
  users: IUserData;
  requestUsers: () => void;
}

export class HomeScreenComponent extends React.Component<IHomeScreenProps> {
  componentDidMount() {
    this.props.requestUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <View />
    );
  }
}
