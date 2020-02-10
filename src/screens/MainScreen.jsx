import React, { useState } from "react";
import AddressInput from "../components/AddressInput";
import FieldDisplay from "../components/FieldDisplay";
import { useBlockchainData } from "../hooks/blockchain.mock";
import { nodeConfig } from "../config/blockchain";
import ErrorDisplay from "../components/ErrorDisplay";
import Loader from "../components/Loader";

const MainScreen = () => {
  const [address, setAddress] = useState("");

  const { icon, balance, error, loading, tokens } = useBlockchainData({
    nodeConfig,
    address
  });

  const tokenFields = tokens.map(token => {
    const { icon, balance, name } = token;
    return <FieldDisplay key={name} value={`${balance} ${name}`} icon={icon} />;
  });

  return (
    <>
      <AddressInput
        title="Enter your ETH address"
        onChange={({ target: { value } }) => setAddress(value)}
      />

      {error && <ErrorDisplay error={error} />}
      {loading && <Loader />}

      {!error && !loading && (
        <>
          <div>
            <h2>Wallet balance</h2>
            <FieldDisplay value={balance} icon={icon} />
          </div>

          <div>
            <h2>ERC20 tokens</h2>
            {tokenFields}
          </div>
        </>
      )}
    </>
  );
};

export default MainScreen;
