// App
interface IAppProps {}

interface IAppState {
  store?: any;
  persistor?: any;
}

interface IHomeScreenProps {
  users: IUserData[];
  loading: boolean;
  requestUsers: () => void;
  requestUsersNext: () => void;
  selectUser: (userLogin: string) => void;
}

interface IFollowersScreenProps {
  followers: IUserData[];
  loading: boolean;
  requestUserFollowers: () => void;
  requestUserFollowersNext: () => void;
}
