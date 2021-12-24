import { SET_ALERT } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (snackbarOpen, msg, alertType) => (dispatch) => {

    const uuid = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: {snackbarOpen:snackbarOpen,
                msg:msg,
                alertType:alertType,
                id:uuid },
    });


  setTimeout(()=> dispatch({type: SET_ALERT, payload: {id:uuid}}), 6000)

};
