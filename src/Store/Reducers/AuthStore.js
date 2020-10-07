import { combineReducers } from 'redux';
import { IS_AUTHED } from "../ActionTypes";

const INITIAL_STATE = false;

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_AUTHED:
      state = action.status;
      console.log(state, 'stateInReducer');
      console.log(action, 'action');
      return state;
    default:
      return state
  }
};

export default combineReducers({
  authed: AuthReducer
});