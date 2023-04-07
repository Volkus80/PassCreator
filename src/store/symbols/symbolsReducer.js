import { SYMBOLS } from "./symbolsActions";

export const symbolsReducer = (state = false, action) => {
    switch (action.type) {
        case SYMBOLS: {
            return !state;
        }
        default: {
            return state;
        }
    }
}