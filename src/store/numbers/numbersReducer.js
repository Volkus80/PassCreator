import { NUMBERS } from "./numbersActions";

export const numbersReducer = (state = false, action) => {
    switch (action.type) {
        case NUMBERS: {
            return !state;
        }
        default: {
            return state;
        }
    }
}