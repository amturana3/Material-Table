import { Constants } from "./types";

const initialState = {
  userData: null,
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
}
