import { SET_ALERT } from "../actions/types";

const initialState = {
  snackbarOpen: false,
  msg: {},
  alertType: {},
  id: {}
};

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_ALERT:
      return {
        snackbarOpen: action.payload.snackbarOpen,
        msg: action.payload.msg,
        alertType: action.payload.alertType,
        id: action.payload.id
  };
    default:
      return state;
  }
}
