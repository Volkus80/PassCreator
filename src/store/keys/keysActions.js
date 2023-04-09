export const ADD_STRING = "ADD_STRING";
export const REMOVE_STRING = "REMOVE_STRING";

export const addString = (str) => ({
  type: ADD_STRING,
  payload: str,
});

export const removeString = (str) => ({
  type: REMOVE_STRING,
  payload: str,
});
