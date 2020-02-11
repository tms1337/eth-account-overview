import React from "react";
import { colors } from "../../config/ui";

const AddressInput = ({ title, onChange, registerField, isError }) => {
  const inputStyle = isError
    ? { ...styles.input, ...styles.errorInput }
    : styles.input;

  return (
    <div>
      <h2 style={styles.title}>{title}</h2>
      <input
        style={inputStyle}
        type="text"
        onChange={onChange}
        ref={registerField}
      />
    </div>
  );
};

const styles = {
  title: {
    fontSize: "25px",
    color: colors.PRIMARY
  },
  input: {
    width: "100%",
    height: "20px",
    appearance: "none",
    outline: "none",
    border: "none",
    borderBottom: "2px solid black",
    fontSize: "20px",
    color: colors.DARK_GREY
  },
  errorInput: {
    border: `2px solid ${colors.ERROR}`,
  }
};

export default AddressInput;
