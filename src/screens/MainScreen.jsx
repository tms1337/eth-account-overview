import React, { useState } from "react";

import AddressInput from "../components/AddressInput";
import FieldDisplay from "../components/FieldDisplay";
import useBlockchainData from "../hooks/useBlockchainData";
import { nodeConfig, contractAddress } from "../config/blockchain";
import ErrorDisplay from "../components/ErrorDisplay";
import Loader from "../components/Loader";
import { colors } from "../config/ui";

const MainScreen = () => {
  const [address, setAddress] = useState("");

  const {
    error,
    loading,
    icon,
    balance,
    tokens,
    guardians
  } = useBlockchainData({
    nodeConfig,
    address,
    contractAddress
  });

  const tokenFields = tokens.map(token => {
    const { icon, balance, name } = token;
    return <FieldDisplay key={name} value={`${balance} ${name}`} icon={icon} />;
  });

  return (
    <div>
      <AddressInput
        title="Enter your ETH address"
        onChange={({ target: { value } }) => setAddress(value)}
        isError={error}
      />

      <div style={styles.walletInfo}>
        {error && <ErrorDisplay error={error} />}
        {!error && loading && <Loader />}

        {!error && !loading && (
          <>
            <div>
              <h2 style={styles.header}>Wallet balance</h2>
              <FieldDisplay value={balance} icon={icon} />
            </div>

            <div>
              <h2 style={styles.header}>Guardians</h2>
              <FieldDisplay
                icon={
                  "https://cdn2.iconfinder.com/data/icons/devil-angel-friend-enemy/270/angel-devil-001-512.png"
                }
                value={guardians}
              />
            </div>

            <div>
              <h2 style={styles.header}>ERC20 tokens</h2>
              {tokenFields}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  header: {
    color: colors.PRIMARY
  },
  walletInfo: {
    background: colors.LIGHT_GREY,
    padding: "15px",
    marginTop: "40px"
  }
};

export default MainScreen;
