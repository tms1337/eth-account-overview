import React from "react";

import { colors } from "../../config/ui";

const Header = ({ title, logo }) => {
  return (
    <div style={styles.root}>
      {logo && <img src={logo} alt="Company logo" />}
      <h2>{title}</h2>
    </div>
  );
};

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: colors.PRIMARY,
    color: colors.WHITE
  }
};

export default Header;
