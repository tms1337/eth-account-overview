import reducer from "./reducer";
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

describe("reducer", () => {
  it("should be able to set screen error", () => {
    const error = "My error";
    const { error: nextError } = reducer(
      { error: false },
      { type: SET_ERROR, payload: { part: "screen", error } }
    );
    expect(nextError.screen).toBe(error);
  });

  it("should be able to set another screen error", () => {
    const error = "Another error";
    const { error: nextError } = reducer(
      { error: false },
      { type: SET_ERROR, payload: { part: "screen", error } }
    );
    expect(nextError.screen).toBe(error);
  });

  it("should be able to set part error", () => {
    const part = "myPart";
    const error = "My error";
    const { error: nextError } = reducer(
      { error: false },
      { type: SET_ERROR, payload: { part, error } }
    );
    expect(nextError[part]).toBe(error);
  });

  it("should be able to set another part error", () => {
    const part = "myAnotherPart";
    const error = "My error";
    const { error: nextError } = reducer(
      { error: false },
      { type: SET_ERROR, payload: { part, error } }
    );
    expect(nextError[part]).toBe(error);
  });

  it("should be able to reset screen error", () => {
    const { error: nextError } = reducer(
      { error: true },
      { type: RESET_ERROR, payload: { part: "screen" } }
    );
    expect(nextError.screen).toBe(false);
  });

  it("should be able to reset part error", () => {
    const part = "myPart";
    const { error: nextError } = reducer(
      { error: true },
      { type: RESET_ERROR, payload: { part } }
    );
    expect(nextError[part]).toBe(false);
  });

  it("should be able to reset another part error", () => {
    const part = "myAnotherPart";
    const { error: nextError } = reducer(
      { error: true },
      { type: RESET_ERROR, payload: { part } }
    );
    expect(nextError[part]).toBe(false);
  });

  it("should be able to set screen loading", () => {
    const { loading: nextLoading } = reducer(
      { loading: false },
      { type: SET_LOADING, payload: { part: "screen" } }
    );
    expect(nextLoading.screen).toBe(true);
  });

  it("should be able to reset screen loading", () => {
    const { loading: nextLoading } = reducer(
      { loading: true },
      { type: RESET_LOADING, payload: { part: "screen" } }
    );
    expect(nextLoading.screen).toBe(false);
  });

  it("should be able to set part loading", () => {
    const part = "myPart";
    const { loading: nextLoading } = reducer(
      { loading: false },
      { type: SET_LOADING, payload: { part } }
    );
    expect(nextLoading[part]).toBe(true);
  });

  it("should be able to set another part loading", () => {
    const part = "myAnotherPart";
    const { loading: nextLoading } = reducer(
      { loading: false },
      { type: SET_LOADING, payload: { part } }
    );
    expect(nextLoading[part]).toBe(true);
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
});
