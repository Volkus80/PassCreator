import { RANGE_MODIFY } from "./rangeActions";

export const rangeReducer = (state = 0, action) => {
    switch (action.type) {
        case RANGE_MODIFY: {
            return action.payload
        }
        default: {
            return state;
        }
    }
}