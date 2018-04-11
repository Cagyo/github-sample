interface IUserListProps {
  users: IUserData[];
  loading: boolean;
  touchable?: boolean;
  onEndReached: () => void;
  onItemSelect: (userLogin: string) => void;
  onRefresh: () => void;
}

interface IUserItemInnerProps {
  pressHandler: () => void;
}

interface IUserItemOuterProps {
  user: IUserData;
  touchable?: boolean;
  onPress: (login: string) => void;
}

interface ILinkOuterProps {
  reference: string;
}

interface ILinkInnerProps {
  pressHandler: () => void;
}
