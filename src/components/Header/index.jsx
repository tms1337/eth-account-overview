import React from "react";
import { createUseStyles } from "react-jss";

import { colors } from "../../config/ui";

const Header = ({ title, logo }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {logo && <img src={logo} alt="Company logo" />}
      <h2>{title}</h2>
    </div>
  );
};

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: colors.PRIMARY,
    color: colors.WHITE
  }
});

export default Header;
