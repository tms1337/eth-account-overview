import Web3 from "web3";

import abi from "./contractAbi.json";

const fetchBalance = async ({ address, nodeConfig: { url } }) => {
  const web3 = new Web3(url);
  const { fromWei } = web3.utils;
  return fromWei(await web3.eth.getBalance(address));
};

const fetchGuardians = async ({
  address,
  nodeConfig: { url },
  contractAddress
}) => {
  const web3 = new Web3(url);
  const { Contract } = web3.eth;

  const contract = new Contract(abi, contractAddress);

  return await contract.methods.guardianCount(address).call();
};

const fetchTokens = async ({ address }) => {
  const response = await fetch(
    `http://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`,
    { mode: "no-cors" }
  );

  const { status } = response;

  if (status === 200) {
    const { tokens } = await response.json();

    return tokens.map(({ balance, tokenInfo: { symbol, decimals } }) => ({
      name: symbol,
      balance: (balance / 10 ** decimals).toString()
    }));
  } else {
    throw new Error("Non 200 response while fetching tokens");
  }
};

export { fetchBalance, fetchGuardians, fetchTokens };
