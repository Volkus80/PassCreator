import { combineReducers } from "redux";
import { rangeReducer } from "./range/rangeReducer";
import { upperCaseReducer } from "./upperCase/upperCaseReducer";
import { lowerCaseReducer } from "./lowerCase/lowerCaseReducer";
import { numbersReducer } from "./numbers/numbersReducer";
import { symbolsReducer } from './symbols/symbolsReducer';

export const rootReducer = combineReducers({
    range: rangeReducer,
    upper: upperCaseReducer,
    lower: lowerCaseReducer,
    numbers: numbersReducer,
    symbols: symbolsReducer,
})