import { combineReducers } from "redux";
import stadiumReducer from "./stadiumsReducer";

export default combineReducers({
    stadiums: stadiumReducer
});