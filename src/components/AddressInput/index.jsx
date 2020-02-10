import React from "react";

const AddressInput = ({ title, onChange, registerField }) => {
  return (
    <>
      <h1>{title}</h1>
      <input type="text" onChange={onChange} ref={registerField} />
    </>
  );
};

export default AddressInput;
