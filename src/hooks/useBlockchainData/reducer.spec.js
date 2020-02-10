import reducer from "./reducer";
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

describe("reducer", () => {
  it("should be able to set error", () => {
    const error = "My error";
    const { error: nextError } = reducer(
      { error: false },
      { type: SET_ERROR, payload: error }
    );
    expect(nextError).toBe(error);
  });

  it("should be able to set another error", () => {
    const error = "Another error";
    const { error: nextError } = reducer(
      { error: false },
      { type: SET_ERROR, payload: error }
    );
    expect(nextError).toBe(error);
  });

  it("should be able to reset error", () => {
    const { error: nextError } = reducer(
      { error: true },
      { type: RESET_ERROR }
    );
    expect(nextError).toBe(false);
  });

  it("should be able to ignore reset error payload", () => {
    const { error: nextError } = reducer(
      { error: true },
      { type: RESET_ERROR, payload: "Dummy payload" }
    );
    expect(nextError).toBe(false);
  });

  it("should be able to set loading", () => {
    const { loading: nextLoading } = reducer(
      { loading: false },
      { type: SET_LOADING }
    );
    expect(nextLoading).toBe(true);
  });

  it("should be able to reset loading", () => {
    const { loading: nextLoading } = reducer(
      { loading: true },
      { type: RESET_LOADING }
    );
    expect(nextLoading).toBe(false);
  });

  it("should be able to ignore set loading payload", () => {
    const { loading: nextLoading } = reducer(
      { loading: false },
      { type: SET_LOADING, payload: "Dummy payload" }
    );
    expect(nextLoading).toBe(true);
  });

  it("should be able to set float balance", () => {
    const balance = 12.3;
    const { balance: nextBalance } = reducer(
      { balance: false },
      { type: SET_BALANCE, payload: balance }
    );
    expect(nextBalance).toBe(balance);
  });

  it("should be able to set int balance", () => {
    const balance = 12;
    const { balance: nextBalance } = reducer(
      { balance: false },
      { type: SET_BALANCE, payload: balance }
    );
    expect(nextBalance).toBe(balance);
  });

  it("should be able to set guardians", () => {
    const guardians = 2;
    const { guardians: nextGuardians } = reducer(
      {},
      { type: SET_GUARDIANS, payload: guardians }
    );
    expect(nextGuardians).toBe(guardians);
  });

  it("should be able to set tokens", () => {
    const tokens = [
      { name: "BAT", balance: 500 },
      { name: "0x", balance: 600 }
    ];
    const { tokens: nextTokens } = reducer(
      {},
      { type: SET_TOKENS, payload: tokens }
    );
    expect(nextTokens).toEqual(tokens);
  });

  it("should be able to add token", () => {
    const tokens = [
      { name: "BAT", balance: 500 },
      { name: "0x", balance: 600 }
    ];

    const addedToken = {
      name: "ADD",
      balance: 2
    };

    const { tokens: nextTokens } = reducer(
      { tokens },
      { type: ADD_TOKEN, payload: addedToken }
    );
    expect(nextTokens).toEqual([...tokens, addedToken]);
  });
});
