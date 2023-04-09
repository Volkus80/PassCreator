export const PASS_WORD = "PASS_WORD";

export const getPassword = (password) => ({
  type: PASS_WORD,
  payload: password,
});
