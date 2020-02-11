import { useEffect, useReducer } from "react";
import { isAddress } from "web3-utils";

import reducer from "./reducer";
import actions from "./actions";
import {
  fetchBalance,
  fetchGuardians,
  fetchTokens
} from "../../services/blockchain";
import tryFetch from "./tryFetch";

const {
  SET_ERROR,
  RESET_ERROR,
  SET_BALANCE,
  SET_GUARDIANS,
  SET_TOKENS,
  RESET_LOADING
} = actions;

const useBlockchainData = ({ nodeConfig, address, contractAddress }) => {
  const initialState = {
    balance: 0,
    guardians: 0,
    error: false,
    loading: true,
    tokens: [],
    icon: "https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png"
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      if (!isAddress(address)) {
        dispatch({
          type: SET_ERROR,
          payload: {
            part: "screen",
            error:
              "You need to enter a valid ETH address i.e. 0x592859824C9D8A97e0f61B22765fE1302fF3Bb60"
          }
        });
      } else {
        dispatch({ type: RESET_LOADING, payload: { part: "screen" } });
        dispatch({ type: RESET_ERROR, payload: { part: "screen" } });

        try {
          Promise.all([
            tryFetch(
              "balance",
              fetchBalance({ address, nodeConfig }),
              SET_BALANCE,
              dispatch
            ),
            tryFetch(
              "guardians",
              fetchGuardians({
                address,
                nodeConfig,
                contractAddress
              }),
              SET_GUARDIANS,
              dispatch
            ),
            tryFetch(
              "tokens",
              fetchTokens({ address, nodeConfig }),
              SET_TOKENS,
              dispatch
            )
          ]);
        } catch (error) {
          console.error({ error });
        }
      }
    })();
  }, [address, contractAddress, nodeConfig]);

  return state;
};

export default useBlockchainData;
