import actions from "./actions";
import tryFetch from "./tryFetch";

const { SET_ERROR, RESET_ERROR, SET_LOADING } = actions;

describe("tryFetch", () => {
  it("should always dispatch RESET_ERROR and SET_LOADING on fullfilled promise", async () => {
    const dispatch = jest.fn();
    const part = "myPart";
    const CUSTOM_ACTION = "CUSTOM_ACTION";
    const promise = new Promise(res => res());

    await tryFetch(part, promise, CUSTOM_ACTION, dispatch);

    expect(dispatch.mock.calls[0][0].type).toBe(RESET_ERROR);
    expect(dispatch.mock.calls[1][0].type).toBe(SET_LOADING);
  });

  it("should always dispatch RESET_ERROR and SET_LOADING on rejected promise", async () => {
    const dispatch = jest.fn();
    const part = "myPart";
    const CUSTOM_ACTION = "CUSTOM_ACTION";
    const promise = new Promise((_, rej) => rej());

    await tryFetch(part, promise, CUSTOM_ACTION, dispatch);

    expect(dispatch.mock.calls[0][0].type).toBe(RESET_ERROR);
    expect(dispatch.mock.calls[1][0].type).toBe(SET_LOADING);
  });

  it("should call action on fullfilled promise", async () => {
    const dispatch = jest.fn();
    const part = "myPart";
    const CUSTOM_ACTION = "CUSTOM_ACTION";
    const promise = new Promise(res => res());

    await tryFetch(part, promise, CUSTOM_ACTION, dispatch);

    expect(dispatch.mock.calls[2][0].type).toBe(CUSTOM_ACTION);
  });

  it("should not call action on rejected promise", async () => {
    const dispatch = jest.fn();
    const part = "myPart";
    const CUSTOM_ACTION = "CUSTOM_ACTION";
    const promise = new Promise((_, rej) => rej());

    await tryFetch(part, promise, CUSTOM_ACTION, dispatch);

    expect(dispatch.mock.calls[2][0].type).not.toBe(CUSTOM_ACTION);
  });

  it("should not call SET_ERROR on rejected promise", async () => {
    const dispatch = jest.fn();
    const part = "myPart";
    const CUSTOM_ACTION = "CUSTOM_ACTION";
    const promise = new Promise((_, rej) => rej());

    await tryFetch(part, promise, CUSTOM_ACTION, dispatch);

    expect(dispatch.mock.calls[2][0].type).toBe(SET_ERROR);
  });
});
