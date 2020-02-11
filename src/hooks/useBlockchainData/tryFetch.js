import actions from "./actions";

const {
  SET_ERROR,
  RESET_ERROR,
  SET_LOADING,
  RESET_LOADING
} = actions;

const tryFetch = async (part, promise, action, dispatch) => {
  try {
    dispatch({ type: RESET_ERROR, payload: { part } });
    dispatch({ type: SET_LOADING, payload: { part } });

    const value = await promise;

    dispatch({ type: action, payload: value });
    dispatch({ type: RESET_LOADING, payload: { part } });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: {
        part,
        error: `An error occured while fetching ${part}`
      }
    });
  }
};

export default tryFetch;
