import React from "react";

import Header from "../../components/Header";

const AppLayout = ({ children }) => {
  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <Header
          title={"My argent wallet overview"}
        />
      </div>
      <div style={styles.main}>{children}</div>
    </div>
  );
};

const styles = {
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
};

export default AppLayout;
