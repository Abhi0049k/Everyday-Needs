import { AuthI } from "../../components/types";
import { ActionI } from "../../components/types";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const initialState: AuthI = {
    isAuth: false,
    isError: false,
    isLoading: false,
    errorMessage: '',
    token: ''
}

export const reducer = (state=initialState, {type, payload}: ActionI) : AuthI=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state, isLoading: true}
        case LOGIN_FAILURE:
            return {...state, isLoading: false, isError: true, errorMessage: payload}
        case LOGIN_SUCCESS:
            return {...state, isLoading: false, isError: false, token: payload, isAuth: true}
        default:
            return state;
    }
}
