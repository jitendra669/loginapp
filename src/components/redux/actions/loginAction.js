import { TYPES } from "../actionType/atctionTypes";

export const login = (user) => ({
  type: TYPES.LOGIN,
  payload: { user },
});

export const UsersList = (users) => ({
  type: TYPES.USERS,
  payload: { users },
});
