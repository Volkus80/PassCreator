import { ADD_STRING, REMOVE_STRING } from "./keysActions";

export const keysReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_STRING: {
      return state + action.payload;
    }
    case REMOVE_STRING: {
      // let str = state;
      return state.replace(action.payload, "");
    }
    default: {
      return state;
    }
  }
};
