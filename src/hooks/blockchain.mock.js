const useBlockchainData = ({ nodeConfig, address }) => {
  return {
    icon: "https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png",
    balance: 1.23,
    error: false,
    loading: false,
    tokens: [{ name: "BAT", balance: 12.3 }]
  };
};

export { useBlockchainData };
