import React from "react";
import { createUseStyles } from "react-jss";

import { colors } from "../../config/ui";

const AddressInput = ({
  title,
  onChange,
  registerField,
  isError,
  submitTitle = "Go!",
  fieldName = "address"
}) => {
  const styles = useStyles({ colors });

  const inputStyle = isError ? styles.errorInput : styles.input;

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.inputForm}>
        <input
          name={fieldName}
          spellCheck={false}
          className={inputStyle}
          type="text"
          onChange={onChange}
          ref={registerField}
        />
        <button className={styles.button}>{submitTitle}</button>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  title: {
    fontSize: "25px",
    color: colors.PRIMARY
  },
  input: {
    width: "80%",
    height: "20px",
    outline: "none",
    border: "none",
    borderBottom: `1.5px solid ${colors.DARK_GREY}`,
    fontSize: "18px",
    color: colors.DARK_GREY
  },
  errorInput: {
    width: "80%",
    height: "20px",
    outline: "none",
    border: `1.5px solid ${colors.ERROR}`,
    fontSize: "18px",
    color: colors.DARK_GREY
  },
  inputForm: {
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    width: "15%",
    border: "none",
    outline: "none",
    background: colors.PRIMARY,
    color: colors.WHITE,
    fontSize: "20px",
    cursor: "pointer",
    "&:active": {
      color: colors.DARK_GREY,
      outline: `0.5px solid ${colors.DARK_GREY}`
    }
  },
  "@media (max-width: 600px)": {
    button: {
      fontSize: "10px",
      width: "80%",
      marginTop: "5px",
      height: "25px"
    },
    inputForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }
});

export default AddressInput;
