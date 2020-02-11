import React from "react";
import { colors } from "../../config/ui";

const ErrorDisplay = ({error}) => {
  return <div style={styles.root}>{error}</div>;
}

const styles = {
  root: {
    color: colors.ERROR
  }
}

export default ErrorDisplay;