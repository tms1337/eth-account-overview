import merge from "deepmerge";

import actions from "./actions";

const {
  SET_ERROR,
  RESET_ERROR,
  SET_LOADING,
  SET_BALANCE,
  SET_GUARDIANS,
  SET_TOKENS,
  RESET_LOADING
} = actions;

const reducer = (state, action) => {
  const { type, payload } = action;
  const { part, error } = payload;

  switch (type) {
    case SET_ERROR:
      return merge(state, { error: { [part]: error } });
    case RESET_ERROR:
      return merge(state, { error: { [part]: false } });
    case SET_LOADING:
      return merge(state, { loading: { [part]: true } });
    case RESET_LOADING:
      return merge(state, { loading: { [part]: false } });
    case SET_BALANCE:
      return merge(state, { balance: payload });
    case SET_GUARDIANS:
      return merge(state, { guardians: payload });
    case SET_TOKENS:
      return { ...state, tokens: payload };
    default:
      return state;
  }
};

export default reducer;
