import { PASS_WORD } from "./passwordActions";

export const passwordReducer = (state = "", action) => {
  switch (action.type) {
    case PASS_WORD: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
