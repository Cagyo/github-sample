import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainContainerContent: {
    margin: 5,
  },
  item: {
    flex: 1,
    height: 112,
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  login: {
    flex: 2 / 3,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: '600',
  },
  avatar: {
    width: 100,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  }
});
