import actions from "./actions";

const {
  SET_ERROR,
  RESET_ERROR,
  SET_LOADING,
  SET_BALANCE,
  SET_GUARDIANS,
  SET_TOKENS,
  ADD_TOKEN,
  RESET_LOADING
} = actions;

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR:
      return { ...state, error: payload };
    case RESET_ERROR:
      return { ...state, error: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case RESET_LOADING:
      return { ...state, loading: false };
    case SET_BALANCE:
      return { ...state, balance: payload };
    case SET_GUARDIANS:
      return { ...state, guardians: payload };
    case SET_TOKENS:
      return { ...state, tokens: payload };
    case ADD_TOKEN:
      return { ...state, tokens: [...state.tokens, payload] };
    default:
      return state;
  }
};

export default reducer;
