import React from "react";
import { createUseStyles } from "react-jss";

import { colors } from "../../config/ui";

const ErrorView = ({error}) => {
  const styles = useStyles();

  return <div className={styles.root}>{error}</div>;
}

const useStyles = createUseStyles({
  root: {
    color: colors.ERROR,
    wordBreak: "break-all"
  }
});

export default ErrorView;