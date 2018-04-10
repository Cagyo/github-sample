import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainContainerContent: {
    padding: 10,
  },
  item: {
    width,
    flex: 1,
    height: 112,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  login: {
    flex: 1 / 3,
    justifyContent: 'center',
  },
  link: {
    flex: 1 / 3,
    justifyContent: 'center',
  },
  avatar: {
    flex: 1 / 3,
    width: 100,
    height: 100,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});
