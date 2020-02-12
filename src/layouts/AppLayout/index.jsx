import React from "react";
import { createUseStyles } from "react-jss";

import Header from "../../components/Header";

const AppLayout = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header
          title={"My argent wallet overview"}
        />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0
  },
  header: {
    width: "100%"
  },
  main: {
    width: "50%"
  }
});

export default AppLayout;
