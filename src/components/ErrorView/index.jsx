import React from "react";
import { colors } from "../../config/ui";

const ErrorView = ({error}) => {
  return <div style={styles.root}>{error}</div>;
}

const styles = {
  root: {
    color: colors.ERROR,
    wordBreak: "break-all"
  }
}

export default ErrorView;