import { combineReducers } from "redux";
import { rangeReducer } from "./range/rangeReducer";

export const rootReducer = combineReducers({
    range: rangeReducer,
})