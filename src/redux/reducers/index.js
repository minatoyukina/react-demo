import {combineReducers} from "redux";
import filterReducer from "./filterReducer"
import todoReducer from "./todoReducer"
import userReducer from "./userReducer"

export default combineReducers({todoReducer, filterReducer, userReducer})
