import axios from "axios";
import {
    DOCTOR_REGISTER_SUCCESS,
    DOCTOR_REGISTER_FAIL,
    DOCTOR_USER_LOADED,
    DOCTOR_AUTH_ERROR,
    DOCTOR_LOGIN_SUCCESS,
    DOCTOR_LOGIN_FAIL,
    DOCTOR_LOGOUT} from "./types";
import setAuthToken from "../utils/setAuthToken";
import {setAlert} from "./alert";

// A Reducer is like a pipeline, you have multiple pipelines for different tasks.
// An action is a file, that has a type, like a header, and a payload, the context.
// You specify the pipeline, reducer, you want to sent your document to, action, and the reducer will understand the case
// and will perform a action, as a reducer is a pure function (functional programming).

// User Login
export const loadUser = () => async dispatch =>{

    try{

        if(localStorage.getItem("token")){
            setAuthToken(localStorage.getItem("token"));
        } else {
            throw "err";
        }

        const res = await axios.get(`https://backendaapefp.azurewebsites.net/api/auth/`)
        dispatch({
            type: DOCTOR_USER_LOADED,
            payload: res.data
        });


    }
    catch (err){

        dispatch({
            type: DOCTOR_AUTH_ERROR
        });
    }
};

//Register register a user
export const userRegister = (body) => async dispatch =>{
    const config = {
        headers: {
            "Content-Type": "application/json",
                },
        };

    try{
        const res = await axios.post(
            `https://backendaapefp.azurewebsites.net/api/doctors/`,
            body,
            config
        );

        dispatch({
            type:DOCTOR_REGISTER_SUCCESS,
            payload:res.data});

        dispatch(loadUser());
    }

    catch(err){

        const errors = err.response.data.err
        if (errors) {errors.forEach(error => dispatch(setAlert(true, error.msg, "error")))}
        
        dispatch({
            type:DOCTOR_REGISTER_FAIL
        })
    }
};

//Login a user
export const userLogin = (body) => async dispatch =>{
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try{
        const res = await axios.post(
            `https://backendaapefp.azurewebsites.net/api/auth`,
            body,
            config
        );



        dispatch({
            type:DOCTOR_LOGIN_SUCCESS,
            payload:res.data});


        dispatch(loadUser());
    }

    catch(err){

        const errors = err.response.data.err
        if (errors) {errors.forEach(error => dispatch(setAlert(true, error.msg, "error")))}

        dispatch({
            type:DOCTOR_LOGIN_FAIL
        })
    }
};


// Logging out

export const userLogout = () => dispatch => {
    setAuthToken();
    dispatch({
        type: DOCTOR_LOGOUT
    })
}