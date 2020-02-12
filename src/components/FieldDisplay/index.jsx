import React from "react";
import { createUseStyles } from "react-jss";

const FieldDisplay = ({ value, icon }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {icon && <img className={styles.icon} src={icon} alt="Field icon" />}
      <div>{value}</div>
    </div>
  );
};

const useStyles = createUseStyles({
  root: {
    display: "flex",
    fontSize: "20px"
  },
  icon: {
    height: "20px",
    marginRight: "10px"
  }
});

export default FieldDisplay;
