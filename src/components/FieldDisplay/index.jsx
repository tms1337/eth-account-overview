import React from "react";

const FieldDisplay = ({ value, icon }) => {
  return (
    <div style={styles.root}>
      {icon && <img style={styles.icon} src={icon} alt="Field icon" />}
      <div>{value}</div>
    </div>
  );
};

const styles = {
  root: {
    display: "flex",
    fontSize: "20px"
  },
  icon: {
    height: "20px",
    marginRight: "10px"
  }
}

export default FieldDisplay;
