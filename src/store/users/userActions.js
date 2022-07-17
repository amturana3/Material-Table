import { Constants } from "./types";

export const setUserData = (payload) => (dispatch) => {
  dispatch({
    type: Constants.SET_USER_DATA,
    payload: payload,
  });
};
