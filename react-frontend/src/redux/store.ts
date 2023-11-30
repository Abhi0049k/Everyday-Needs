import { combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";

const rootReducer = combineReducers({
    authReducer
})

export const store = legacy_createStore(rootReducer);
