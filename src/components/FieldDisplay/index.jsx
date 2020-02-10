import React from "react";

const FieldDisplay = ({ value, icon }) => {
  return (
    <>
      {icon && <img src={icon} alt="Field icon" />}
      <div>{value}</div>
    </>
  );
};

export default FieldDisplay;
