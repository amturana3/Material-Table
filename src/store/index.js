import { combineReducers, createStore, applyMiddleware } from "redux";
import { UserReducer } from "./users/userReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  combineReducers({ users: UserReducer }),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
