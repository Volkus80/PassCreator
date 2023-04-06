import { LOWER_CASE } from "./lowerCaseActions";

export const lowerCaseReducer = (state = false, action) => {
    switch (action.type) {
        case LOWER_CASE: {
            return !state;
        }
        default: {
            return state;
        }
    }
}