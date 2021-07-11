import { TYPES } from "../actionType/atctionTypes";
const initialState = {
  user: {
    username: "",
  },
  users: {
    users: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        user: action.payload.user.username,
      };
    case TYPES.USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};

export default reducer;
