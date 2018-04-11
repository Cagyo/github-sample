import * as types from '../actions/types';

export const initialState = {
  users: [],
  since: 0,
  selectedUserLogin: null,
  loading: false,
};

const getUserWithMaxId = (users: IUserData[]) =>
  users.reduce((prev, current) => (prev.id > current.id) ? prev : current);

export function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.REQUEST_USERS:
    case types.REQUEST_USERS_NEXT:
      return {
        ...state,
        loading: true,
      };
    case types.REQUEST_USERS_FAIL:
    case types.REQUEST_USERS_NEXT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case types.REQUEST_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        since: getUserWithMaxId(payload).id,
        loading: false,
      };
    case types.REQUEST_USERS_NEXT_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...payload],
        since: getUserWithMaxId(payload).id,
        loading: false,
      };
    case types.SELECT_USER:
      return {
        ...state,
        selectedUserLogin: payload,
      };
    default:
      return state;
  }
}
