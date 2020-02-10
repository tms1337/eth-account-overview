import React from "react";

const AddressInput = ({ title, onChange, registerField, goText = "Go" }) => {
  return (
    <>
      <h1>{title}</h1>
      <input type="text" onChange={onChange} ref={registerField} />
      <button>{goText}</button>
    </>
  );
};

export default AddressInput;
