import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createUseStyles } from "react-jss";

import AddressInput from "../components/AddressInput";
import FieldDisplay from "../components/FieldDisplay";
import useBlockchainData from "../hooks/useBlockchainData";
import { nodeConfig, contractAddress } from "../config/blockchain";
import ErrorView from "../components/ErrorView";
import Loader from "../components/Loader";
import { colors } from "../config/ui";

const MainScreen = () => {
  const styles = useStyles();

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
        <h2 className={styles.header}>{header}</h2>
        {error && <ErrorView error={error} />}
        {!error && loading && <Loader />}
        {!error && !loading && component}
      </div>
    );
  };

  const { register, handleSubmit } = useForm();
  const onAddressSubmit = ({ address }) => {
    setAddress(address);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onAddressSubmit)}>
        <AddressInput
          title="Enter your ETH address"
          isError={error.screen}
          submitTitle={">"}
          registerField={register}
        />
      </form>

      <div className={styles.walletInfo}>
        {error.screen && <ErrorView error={error.screen} />}
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

const useStyles = createUseStyles({
  header: {
    color: colors.PRIMARY,
    fontSize: "20px"
  },
  walletInfo: {
    background: colors.LIGHT_GREY,
    padding: "15px",
    marginTop: "40px",
    wordBreak: "break-all"
  },
  "@media (max-width: 600px)": {
    header: {
      fontSize: "15px"
    }
  }
});

export default MainScreen;
