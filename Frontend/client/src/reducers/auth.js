import {
    DOCTOR_REGISTER_SUCCESS,
    DOCTOR_REGISTER_FAIL,
    DOCTOR_USER_LOADED,
    DOCTOR_AUTH_ERROR,
    DOCTOR_LOGIN_FAIL,
    DOCTOR_LOGIN_SUCCESS,
    DOCTOR_LOGOUT
} from "../actions/types";

// Local storage is used to store authentication

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    doctor: []
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){

        case DOCTOR_REGISTER_SUCCESS:
        case DOCTOR_LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
                //Returning state
                return{...state,
                ...payload,
                isAuthenticated: true,
                loading: false};

        case DOCTOR_LOGOUT:
        case DOCTOR_AUTH_ERROR:
        case DOCTOR_LOGIN_FAIL:
        case DOCTOR_REGISTER_FAIL:
            //Remove anything that is in the local storage
            localStorage.clear();
            sessionStorage.clear();
            return{...state,
                token: null,
                isAuthenticated: false,
                loading: false};

        case DOCTOR_USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                doctor: payload
            }

        default:
            return state;
    }
}