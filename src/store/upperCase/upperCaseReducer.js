import { UPPER_CASE } from "./upperCaseActions";

export const upperCaseReducer = (state = false, action) => {
    switch (action.type) {
        case UPPER_CASE: {
            return !state;
        }
        default: {
            return state;
        }
    }
}