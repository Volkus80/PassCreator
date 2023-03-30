import { ADD_COUNTER } from './counter-actions';

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD_COUNTER: {
            return state + 1;
        }
        default: {
            return state;
        }
    }
}