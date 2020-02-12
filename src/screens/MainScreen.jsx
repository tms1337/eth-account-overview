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

  const tokenFields = tokens.map(({ icon, balance, name }) => {
    return <FieldDisplay key={name} value={`${balance} ${name}`} icon={icon} />;
  });

  const displayWithLoadingAndError = (error, loading, header, component) => {
    return (
      <div>
        <h2 style={styles.header}>{header}</h2>
        {error ? (
          <ErrorDisplay error={error} />
        ) : loading ? (
          <Loader />
        ) : (
          component
        )}
      </div>
    );
  };

  return (
    <div>
      <AddressInput
        title="Enter your ETH address"
        onChange={({ target: { value } }) => setAddress(value)}
        isError={error.screen}
      />

      <div style={styles.walletInfo}>
        {error.screen && <ErrorDisplay error={error.screen} />}
        {!error.screen && loading.screen && <Loader />}

        {!error.screen && !loading.screen && (
          <>
            {displayWithLoadingAndError(
              error.balance,
              loading.balance,
              "Wallet balance",
              <FieldDisplay value={balance} icon={icon} />
            )}

            {displayWithLoadingAndError(
              error.guardians,
              loading.guardians,
              "Guardians",
              <FieldDisplay
                icon={
                  "https://cdn2.iconfinder.com/data/icons/devil-angel-friend-enemy/270/angel-devil-001-512.png"
                }
                value={guardians}
              />
            )}

            {displayWithLoadingAndError(
              error.tokens,
              loading.tokens,
              "ERC20 tokens",
              tokenFields
            )}
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
