import { combineReducers } from "redux";
import { rangeReducer } from "./range/rangeReducer";
import { upperCaseReducer } from "./upperCase/upperCaseReducer";
import { lowerCaseReducer } from "./lowerCase/lowerCaseReducer";

export const rootReducer = combineReducers({
    range: rangeReducer,
    upper: upperCaseReducer,
    lower: lowerCaseReducer
})