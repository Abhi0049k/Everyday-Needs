import { AuthI } from "../../components/types";
import { ActionI } from "../../components/types";
import { FAILURE, REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actionTypes";

const initialState: AuthI = {
    isAuth: false,
    isError: false,
    isLoading: false,
    errorMessage: '',
    token: ''
}

export const reducer = (state=initialState, {type, payload}: ActionI) : AuthI=>{
    switch(type){
        case REQUEST:
            return {...state, isLoading: true}
        case FAILURE:
            return {...state, isLoading: false, isError: true, errorMessage: payload}
        case LOGIN_SUCCESS:
            return {...state, isLoading: false, isError: false, token: payload, isAuth: true}
        case REGISTER_SUCCESS:
            return {...state, isLoading: false, isError: false}
        default:
            return state;
    }
}
