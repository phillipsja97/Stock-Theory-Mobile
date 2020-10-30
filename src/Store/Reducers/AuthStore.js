import { combineReducers } from 'redux';
import { IS_AUTHED } from "../ActionTypes";
import { ACCESS_TOKEN } from '../ActionTypes';
import { GET_USER } from '../ActionTypes';

const INITIAL_STATE = false;
const INITIAL_USER = {};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_AUTHED:
      state = action.status;
      return state;
    default:
      return state
  }
};

const TokenReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACCESS_TOKEN:
      state = action.status;
      return state;
    default:
      return state
  }
}

const UserReducer = (state = INITIAL_USER, action) => {
  switch(action.type) {
    case GET_USER:
      state = action.status;
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  authed: AuthReducer,
  token: TokenReducer,
  user: UserReducer
});