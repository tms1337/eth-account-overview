import { useEffect, useReducer } from "react";
import { isAddress } from "web3-utils";

import reducer from "./reducer";
import actions from "./actions";
import {
  fetchBalance,
  fetchGuardians,
  fetchTokens
} from "../../services/blockchain";

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
          payload:
            "You need to enter a valid ETH address i.e. 0x592859824C9D8A97e0f61B22765fE1302fF3Bb60"
        });
      } else {
        try {
          dispatch({ type: RESET_LOADING });
          dispatch({ type: RESET_ERROR });
          
          const balance = await fetchBalance({ address, nodeConfig });
          dispatch({ type: SET_BALANCE, payload: balance });

          const guardians = await fetchGuardians({
            address,
            nodeConfig,
            contractAddress
          });
          dispatch({ type: SET_GUARDIANS, payload: guardians });

          const tokens = await fetchTokens({ address, nodeConfig });
          dispatch({ type: SET_TOKENS, payload: tokens });
        } catch (error) {
          console.log({ error });

          dispatch({
            type: SET_ERROR,
            payload: "Error while fetching the data"
          });
        }
      }
    })();
  }, [address, contractAddress, nodeConfig]);

  return state;
};

export default useBlockchainData;
