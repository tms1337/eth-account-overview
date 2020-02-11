import React from "react";
import { colors } from "../../config/ui";

const AddressInput = ({ title, onChange, registerField, isError }) => {
  const inputStyle = isError
    ? styles.errorInput
    : styles.input;

  return (
    <div>
      <h2 style={styles.title}>{title}</h2>
      <input
        spellCheck={false}
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
    outline: "none",
    border: "none",
    borderBottom: `1.5px solid ${colors.DARK_GREY}`,
    fontSize: "20px",
    color: colors.DARK_GREY
  },
  errorInput: {
    width: "100%",
    height: "20px",
    outline: "none",
    border: `1.5px solid ${colors.ERROR}`,
    fontSize: "20px",
    color: colors.DARK_GREY
  }
};

export default AddressInput;
